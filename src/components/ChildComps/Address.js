import React, { useState } from "react";
import { Row, Col, Modal } from "antd";
import styled from "styled-components";
import {
  PlusOutlined,
  InfoCircleOutlined,
  CreditCardOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import { ChildContainer } from "./BankCard";
import EditAddress from "./EditAddress";
import { Header, AuthLink, Icon } from "../Auth/Login/LoginElements";
import { Actions } from "./BankCard";
import { PageButton } from "./Recharge";

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

const Address = (props) => {
  const [open, setOpen] = useState(false);
  const [editAddressOpen, setEditAddressOpen] = useState(false);
  const [isAddAddress, setAddAddress] = useState(false)

  const handleCancel = () => {
    setOpen(false);
  };

  const handleInfo = () => {
    setOpen(true);
  };

  const renderAddress = () => {
    return addressData.map((info, index) => {
      return (
        <ChildContainer key={index}>
          <Row>
            <Col span={2}>
              <CreditCardOutlined />
            </Col>
            <Col span={20}>
              <NameNumber>
                {info.name}&nbsp;{info.mobile}
              </NameNumber>
              <Addrs>
                {info.detailedAddress}
                {info.city}
                {info.state}
                {info.pincode}
              </Addrs>
            </Col>
            <Col span={2}>
              <InfoCircleOutlined onClick={handleInfo} />
            </Col>
          </Row>
        </ChildContainer>
      );
    });
  };
  const handleEditAddress = () => {
    setEditAddressOpen(true);
  };
  const handleAddAddress = () => {
    setAddAddress(true);
  }

  const renderModal = () => {
    return (
      <Modal open={open} title="Actions" footer={[]} onCancel={handleCancel}>
        <p>Do you want to edit or delete the address ?</p>
        <Actions>
          <PageButton style={{ margin: "0" }}>
            <EditOutlined onClick={handleEditAddress} /> Edit
          </PageButton>
          <PageButton style={{ margin: "0" }} onClick={handleCancel}>
            <DeleteOutlined />
            Delete
          </PageButton>
        </Actions>
      </Modal>
    );
  };

  return (
    <>
    <div>
      <Header style={{ margin: "0" }}>
        <AuthLink to={"/profile"}>
          {/* put link here  */}
          <Icon />
          <h1>{props.heading}</h1>
        </AuthLink>
        <AuthLink to={"/pages/person/add-address"}><PlusOutlined className="side-icon" /></AuthLink>
      </Header>
      {renderAddress()}
      {open && renderModal()}
    </div>
    {editAddressOpen && <EditAddress heading="Edit Address" />} 
    {isAddAddress && <EditAddress heading="Add Address" />}
    </>
  );
};

const NameNumber = styled.p``;
const Addrs = styled.p`
  color: #8799a3;
  font-size: 12px;
  padding: 4px 0;
`;

export default Address;
