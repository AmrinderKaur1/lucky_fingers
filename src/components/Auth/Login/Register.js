import React from "react";
import {
  ShoppingOutlined,
  MobileOutlined,
  CodeOutlined,
  KeyOutlined,
} from "@ant-design/icons";
import { Input, Checkbox } from "antd";

import {
  AuthContainer,
  Header,
  Icon,
  InputBoxes,
  AuthLink,
  Btn,
} from "./LoginElements";

export const handleNumericKeyPress = (e) => {
  const charCode = e.charCode != null ? e.charCode : e.keyCode;
  const charString = String.fromCharCode(charCode);

  if (!charString.match(/^[0-9\b]+$/)) {
    e.preventDefault();
  }
};

const Register = () => {

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <AuthContainer>
      <Header>
        <AuthLink to={"/login"}>
            <Icon />
            <h1 style={{paddingLeft: '12px'}}>Register</h1>
        </AuthLink>
      </Header>
      <InputBoxes>
        <Input
          placeholder="Mobile Number"
          prefix={<MobileOutlined />}
          onKeyPress={handleNumericKeyPress}
          maxLength={10}
          style={{ marginBottom: "1rem", height: "40px" }}
        />
        <Input
          placeholder="Verification Code"
          prefix={<CodeOutlined />}
          onKeyPress={handleNumericKeyPress}
          maxLength={6}
          suffix={<Btn login={false} otp={true}>OTP</Btn>}
          style={{ marginBottom: "1rem" }}
        />
        <Input
          placeholder="Password"
          prefix={<KeyOutlined />}
          maxLength={12}
          style={{ marginBottom: "1rem", height: "40px" }}
        />
        <Input
          placeholder="Reccomendation Code"
          prefix={<ShoppingOutlined />}
          maxLength={12}
          style={{ marginBottom: "1rem", height: "40px" }}
        />
        <Checkbox onChange={onChange}>
          I agree &nbsp;
          <AuthLink to={"/privacy"}>
            <a href="">PRIVACY POLICY</a>
          </AuthLink>
        </Checkbox>
      </InputBoxes>

      <AuthLink to={"/register"}>
        <Btn otp={false} >Register</Btn>
      </AuthLink>
    </AuthContainer>
  );
};

export default Register;
