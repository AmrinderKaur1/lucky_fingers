import React from "react";
import { Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { PageButton } from "./Recharge";
import { handleNumericKeyPress } from "../Auth/Login/Register";
import { Header, AuthLink, Icon } from "../Auth/Login/LoginElements";
import {
  BorderlessInput,
  BoxDivider,
  BorderLessContainer,
} from "./AddBankCard";

function EditAddress(props) {
  const renderEditAddress = () => (
    <BorderLessContainer>
      <Row>
        <BorderlessInput placeholder="Full Name" />
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
        <BorderlessInput placeholder="Pincode" />
      </Row>
      <BoxDivider />
      <Row>
        <BorderlessInput placeholder="State" />
      </Row>
      <BoxDivider />
      <Row>
        <BorderlessInput placeholder="Town/City" />
      </Row>
      <BoxDivider />
      <Row>
        <BorderlessInput placeholder="Detailed Address" />
      </Row>
      <BoxDivider />
    </BorderLessContainer>
  );

  return (
    <div>
      <Header style={{ margin: "0" }}>
        <AuthLink to="/pages/person/address">
          {/* put link here  */}
          <Icon />
          <h1>{props.heading}</h1>
        </AuthLink>
      </Header>
      {renderEditAddress()}
      <PageButton>Continue</PageButton>
    </div>
  );
}

export default EditAddress;
