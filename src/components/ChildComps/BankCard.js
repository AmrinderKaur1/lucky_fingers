import React, { useState } from "react";
import { Col, Row, Modal } from "antd";
import {
  PlusOutlined,
  CreditCardOutlined,
  InfoCircleOutlined,
  EditOutlined,
  DeleteOutlined,
  ExclamationCircleFilled,
} from "@ant-design/icons";

import { Header, AuthLink, Icon } from "../Auth/Login/LoginElements";
import { PageButton } from "./Recharge";
import styled from "styled-components";

const bankCards = ["", "State Bank of India"];
const { confirm } = Modal;

const BankCard = () => {
  const [open, setOpen] = useState(false);

  const handleInfo = () => {
    setOpen(true);
  };

  const showConfirm = () => {
    confirm({
      title: "Are you sure you want to delete this card ?",
      icon: <ExclamationCircleFilled />,
      content: "You will have to re-enter all the card information.",
      okButtonProps: {
        style: { background: "linear-gradient(90deg,#ff9801,#ff570a)" },
      },
      // onOk() {
      //   console.log('OK');
      // },
      // onCancel() {
      //   console.log('Cancel');
      // },
    });
  };

  const renderInfo = () => {
    return bankCards.map((val, key) => {
      return (
        <ChildContainer key={key}>
          <Row>
            <Col span={2}>
              <CreditCardOutlined />
            </Col>
            <Col span={20}>{val}</Col>
            <Col span={2}>
              <InfoCircleOutlined onClick={handleInfo} />
            </Col>
          </Row>
        </ChildContainer>
      );
    });
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const renderModal = () => {
    return (
      <Modal open={open} title="Actions" footer={[]} onCancel={handleCancel}>
        <p>Do you want to edit or delete the Card ?</p>
        <Actions>
          <PageButton style={{ margin: "0" }}>
            <EditOutlined /> Edit
          </PageButton>
          <PageButton style={{ margin: "0" }} onClick={showConfirm}>
            <DeleteOutlined />
            Delete
          </PageButton>
        </Actions>
      </Modal>
    );
  };

  return (
    <BankCardContainer>
      <Header style={{ marginBottom: "0" }}>
        <AuthLink to={"/profile"}>
          {/* put link here  */}
          <Icon />
          <h1>Bank Card</h1>
        </AuthLink>
        <AuthLink to={"/pages/person/addbank"}><PlusOutlined className="side-icon" /></AuthLink>
      </Header>
      <div>{renderInfo()}</div>
      {open && renderModal()}
    </BankCardContainer>
  );
};

export const ChildContainer = styled.div`
  padding: 14px;
  box-shadow: 3px 3px 4px rgb(26 26 26 / 20%);
`;

export const Actions = styled.div`
  padding: 16px 40px 0px 16px;
  display: flex;
  justify-content: space-around;
`;

const BankCardContainer = styled.div``;

export default BankCard;
