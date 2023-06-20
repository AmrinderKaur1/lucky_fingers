import React from "react";
import { Row } from "antd";
import styled from "styled-components";

import { RecordContainer } from "./RechargeRecord";
import { Header, AuthLink, Icon } from "../Auth/Login/LoginElements";
import { PageButton } from "./Recharge";
import {
  BorderLessContainer,
  BoxDivider,
  BorderlessInput,
} from "./AddBankCard";

function AddSuggNComp() {
  const renderBankCard = () => (
    <BorderLessContainer>
      <Row>
        <BorderlessInput placeholder="Type" />
      </Row>
      <BoxDivider />
      <Row>
        <BorderlessInput placeholder="Out ID" />
      </Row>
      <BoxDivider />
      <Row>
        <BorderlessInput placeholder="WhatsApp" />
      </Row>
      <BoxDivider />
      <Row>
        <BorderlessInput placeholder="Description" />
      </Row>
      <BoxDivider />
    </BorderLessContainer>
  );

  return (
    <RecordContainer style={{ boxShadow: "none" }}>
      <Header style={{ margin: "0" }}>
        <AuthLink to="/pages/person/complaint">
          <Icon />
          <h1>Add Complaints & Suggestion</h1>
        </AuthLink>
      </Header>
      {renderBankCard()}
      <ServiceInfo>
        Service: 10:00~17:00,Mon~Fri about 1~5 business days
      </ServiceInfo>
      <PageButton>Continue</PageButton>
    </RecordContainer>
  );
}

const ServiceInfo = styled.p`
  font-size: smaller;
  padding: 0 5px 20px 8px;
`;

export default AddSuggNComp;
