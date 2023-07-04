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

const addressData = [
  {
    name: "Karan",
    mobile: "0000000010",
    pincode: "13232",
    state: "pb",
    city: "hsp",
    detailedAddress: "ola sipola",
  },
  {
    name: "Karan",
    mobile: "0000000010",
    pincode: "13232",
    state: "pb",
    city: "hsp",
    detailedAddress: "ola sipola",
  },
  {
    name: "Karan",
    mobile: "0000000010",
    pincode: "13232",
    state: "pb",
    city: "hsp",
    detailedAddress: "ola sipola",
  },
];

function Address(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {addresses} = useSelector((state) => ({
    addresses: state.login.addresses,
  }));

  const [open, setOpen] = useState(false);
  const [editAddressOpen, setEditAddressOpen] = useState(false);
  const [isAddAddress, setAddAddress] = useState(false);
  const [addressLoading, setAddressLoading] = useState(true);
  const [selectedAddressId, setSelectedAddressId] = useState('');

  const handleCancel = useCallback(() => {
    axios.post(`http://localhost:4000/api/address/delete-address/${selectedAddressId}`, {}, {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.jwtToken,
      },
    }).then((res) => {
      console.log('res in deleete', res)
    }).catch(err => console.log('err', err))
    setOpen(false);
  }, [open, localStorage?.jwtToken]);

  const handleInfo = useCallback((id) => {
    setOpen(true);
    setSelectedAddressId(id);
  }, [selectedAddressId, open]);

  const renderAddress = () => {
    if (!addresses?.data?.length) {
      return <Empty />
    }
    return addresses?.data?.map((info, index) => (
      <ChildContainer key={index+1}>
        <Row>
          <Col span={2}>
            <CreditCardOutlined />
          </Col>
          <Col span={20}>
            <NameNumber>
              {info.fullName}&nbsp;{info.mobileNum}
            </NameNumber>
            <Addrs>
              {info.detailedAddress}
              {info.city}
              {info.state}
              {info.pincode}
            </Addrs>
          </Col>
          <Col span={2}>
            <InfoCircleOutlined onClick={() => handleInfo(info?._id)} />
          </Col>
        </Row>
      </ChildContainer>
  ))};

  const renderModal = () => (
    <Modal open={open} title="Actions" footer={[]} onCancel={handleCancel}>
      <p>Do you want to edit or delete the address ?</p>
      <Actions>
        <PageButton style={{ margin: "0" }}>
          <EditOutlined onClick={() => navigate("/pages/person/add-address",{ state: {
            heading: "Edit Address",
            id: selectedAddressId,
          }})} /> Edit
        </PageButton>
        <PageButton style={{ margin: "0" }} onClick={handleCancel}>
          <DeleteOutlined />
          Delete
        </PageButton>
      </Actions>
    </Modal>
  );

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/address", {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage?.jwtToken,
        },
      })
      .then((res) => {
        setAddressLoading(false);
        dispatch(setAddresses(res));
      })
      .catch(() => {
        setAddressLoading(false);
      });
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
        {renderAddress()}
        {/* to delete any address entry  */}
        {open && renderModal()}
      </div>
    </>
  );
}

const NameNumber = styled.p``;
const Addrs = styled.p`
  color: #8799a3;
  font-size: 12px;
  padding: 4px 0;
`;

export default Address;
