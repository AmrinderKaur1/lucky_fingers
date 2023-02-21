import React, { useState, useCallback } from "react";
import { Divider, Input, Row, Col } from "antd";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

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
import { selectMop } from "../../helpers/heads";

const AddBankCard = () => {
  const location = useLocation();
  const isUpiSelected = location.state.isSelectUpiOption;
  console.log(location.state.isSelectUpiOption, 'isUpiSelected') 
  const [isSelectBankCard, setSelectBankCard] = useState(!isUpiSelected);
  const [isSelectUpi, setSelectUpi] = useState(isUpiSelected);

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

  const selectorClickHandler = useCallback(
    (idx) => {
      if (idx === 0) {
        setSelectBankCard(true);
        setSelectUpi(false);
      } else {
        setSelectUpi(true);
        setSelectBankCard(false);
      }
    },
    [selectMop]
  );

  return (
    <>
      <RecordContainer style={{ boxShadow: "none" }}>
        <Header style={{ margin: "0" }}>
          <AuthLink
            to={location.state.navigateBackTo}
          >
            <Icon />
            <h1>Add Bank Card</h1>
          </AuthLink>
        </Header>
        <SubHeadings>
          {selectMop.map((element, idx) => {
            return (
              <PaymentSelectors
                onClick={() => selectorClickHandler(idx)}
                key={idx}
                className={
                  (isSelectBankCard && idx === 0) || (isSelectUpi && idx === 1)
                    ? "active"
                    : ""
                }
              >
                {element.title}
              </PaymentSelectors>
            );
          })}
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
