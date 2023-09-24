import React, { useCallback, useEffect, useState } from "react";
import { Row, Col, Modal, Empty } from "antd";
import axios from "axios";
import styled from "styled-components";
import {
  PlusOutlined,
  InfoCircleOutlined,
  CreditCardOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import { ChildContainer, Actions } from "./BankCard";
import EditAddress from "./EditAddress";
import { Header, AuthLink, Icon } from "../Auth/Login/LoginElements";

import { PageButton } from "./Recharge";
import { setAddresses } from "../../redux/auth/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../helpers/Loader";

function Address(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { addresses } = useSelector((state) => ({
    addresses: state.login.addresses,
  }));

  const [open, setOpen] = useState(false);
  const [addressLoading, setAddressLoading] = useState(true);
  const [selectedAddressId, setSelectedAddressId] = useState("");
  const [deleteLoading, setDeleteLoading] = useState(false);

  const handleDelete = useCallback(async () => {
    setDeleteLoading(true);
    await axios
      .post(
        `http://localhost:4000/api/address/delete-address/${selectedAddressId}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: localStorage.jwtToken,
          },
        }
      )
      .then(() => getAddress());
    setOpen(false);
    setDeleteLoading(false);
  }, [open, localStorage?.jwtToken]);

  const handleInfo = useCallback(
    (id) => {
      setOpen(true);
      setSelectedAddressId(id);
    },
    [selectedAddressId, open]
  );

  const renderAddress = () => {
    if (!addresses?.data?.length) {
      return <Empty />;
    }
    return addresses?.data?.map((info, index) => (
      <ChildContainer key={index + 1}>
        <Row>
          <Col span={2}>
            <CreditCardOutlined />
          </Col>
          <Col span={20}>
            <NameNumber>
              <span>Fullname: </span>{info.fullName} <br/>
              <span>Contact Number: </span>{info.mobileNum}
            </NameNumber>
            <Addrs>
            <span>Detailed Address: </span>{info.detailedAddress}<br/>
            <span>City: </span>{info.city}<br/>
            <span>State: </span>{info.state}<br/>
            <span>Pincode: </span>{info.pincode}<br/>
            </Addrs>
          </Col>
          <Col span={2}>
            <InfoCircleOutlined onClick={() => handleInfo(info?._id)} />
          </Col>
        </Row>
      </ChildContainer>
    ));
  };

  const handleCancel = useCallback(() => {
    setOpen(false);
  }, [open])

  const renderModal = () => (
    <Modal open={open} title="Actions" footer={[]} onCancel={handleCancel}>
      <p>Do you want to edit or delete the address ?</p>
      <Actions>
        <PageButton style={{ margin: "0" }}>
          <EditOutlined
            onClick={() =>
              navigate("/pages/person/add-address", {
                state: {
                  heading: "Edit Address",
                  id: selectedAddressId,
                },
              })
            }
          />{" "}
          Edit
        </PageButton>
        <PageButton
          style={{ margin: "0" }}
          onClick={handleDelete}
          loading={deleteLoading}
        >
          <DeleteOutlined />
          Delete
        </PageButton>
      </Actions>
    </Modal>
  );

  const getAddress = async () => {
    setAddressLoading(true);
    await axios
      .get("http://localhost:4000/api/address", {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage?.jwtToken,
        },
      })
      .then((res) => {
        dispatch(setAddresses(res));
      });
    setAddressLoading(false);
  };

  useEffect(() => {
    getAddress();
  }, []);

  return (
    <>
      <div>
        <Header style={{ margin: "0" }}>
          <AuthLink to="/profile">
            {/* put link here  */}
            <Icon />
            <h1>{props.heading}</h1>
          </AuthLink>
          <AuthLink to="/pages/person/add-address">
            <PlusOutlined className="side-icon" />
          </AuthLink>
        </Header>
        {addressLoading && <Loader />}
        {!addressLoading && renderAddress()}
        {open && !addressLoading && renderModal()}
      </div>
    </>
  );
}

const NameNumber = styled.p`
  span {
    color: #ff8404;
    font-weight: bold;
  }
`;

const Addrs = styled.p`
  color: #8799a3;
  font-size: 12px;
  padding: 4px 0;
  span {
    color: #e7a764;
    font-weight: bold;
  }
`;

export default Address;
