import React, { useState, useCallback } from "react";
import { Divider, Input, Row, Col } from "antd";
import styled from "styled-components";

import { RecordContainer } from "./RechargeRecord";
import {
  AuthLink,
  Header,
  Icon,
  SubHeadings,
  PaymentSelectors,
} from "../Auth/Login/LoginElements";
import { PageButton } from "./Recharge";
import { handleNumericKeyPress } from "../Auth/Login/Register";

const AddBankCard = () => {
  const [isSelectBankCard, setSelectBankCard] = useState(true);
  const [isSelectUpi, setSelectUpi] = useState(false);

  const renderBankCard = () => {
    return (
      <BorderLessContainer>
        <Row>
          <BorderlessInput placeholder="Actual Name" />
        </Row>
        <BoxDivider />
        <Row>
          <BorderlessInput placeholder="IFSC Code" />
        </Row>
        <BoxDivider />
        <Row>
          <BorderlessInput placeholder="Bank Name" />
        </Row>
        <BoxDivider />
        <Row>
          <BorderlessInput placeholder="Bank Account" />
        </Row>
        <BoxDivider />
        <Row>
          <BorderlessInput
            onKeyPress={handleNumericKeyPress}
            maxLength={10}
            placeholder="Mobile Number"
          />
        </Row>
        <BoxDivider />
        <Row>
          <BorderlessInput placeholder="Email" />
        </Row>
        <BoxDivider />
      </BorderLessContainer>
    );
  };

  const renderSelectUPI = () => {
    return (
      <BorderLessContainer>
        <Row>
          <BorderlessInput placeholder="Actual Name" />
        </Row>
        <BoxDivider />
        <Row>
          <BorderlessInput placeholder="UPI Account" />
        </Row>
        <BoxDivider />
        <Row>
          <BorderlessInput
            onKeyPress={handleNumericKeyPress}
            maxLength={10}
            placeholder="Mobile Number"
          />
        </Row>
        <BoxDivider />
        <Row>
          <BorderlessInput placeholder="Email" />
        </Row>
        <BoxDivider />
      </BorderLessContainer>
    );
  };

  const hanldeBankCardClick = useCallback(() => {
    setSelectBankCard(true);
    setSelectUpi(false);
  }, []);
  const handleUpiClick = useCallback(() => {
    setSelectUpi(true);
    setSelectBankCard(false);
  }, []);

  return (
    <>
      <RecordContainer style={{ boxShadow: "none" }}>
        <Header style={{ margin: "0" }}>
          <AuthLink to={"/pages/person/bank"}>
            <Icon />
            <h1 style={{ paddingLeft: "12px" }}>Add Bank Card</h1>
          </AuthLink>
        </Header>
        <SubHeadings>
          <PaymentSelectors onClick={hanldeBankCardClick} >
            Select Bank Card
          </PaymentSelectors>
          <PaymentSelectors onClick={handleUpiClick}>
            Select UPI
          </PaymentSelectors>
        </SubHeadings>
        {/* click actions to be handled  */}
        {isSelectBankCard && renderBankCard()}
        {isSelectUpi && renderSelectUPI()}

        <PageButton>Continue</PageButton>
      </RecordContainer>
    </>
  );
};

export default AddBankCard;

export const BorderlessInput = styled(Input)`
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style: hidden;
  outline: none;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;

export const BorderLessContainer = styled.div`
  padding: 10px;
`;

export const BoxDivider = styled(Divider)`
  margin: 7px 0;
`;
