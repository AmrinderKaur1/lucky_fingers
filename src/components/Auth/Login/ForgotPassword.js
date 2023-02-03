import React from "react";
import { MobileOutlined, CodeOutlined, KeyOutlined } from "@ant-design/icons";
import { Input } from "antd";

import {
  AuthContainer,
  Btn,
  Header,
  Icon,
  InputBoxes,
  AuthLink,
} from "./LoginElements";
import Footer from "../../Footer";

const ForgotPassword = (props) => {
  const handleNumericKeyPress = (e) => {
    const charCode = e.charCode != null ? e.charCode : e.keyCode;
    const charString = String.fromCharCode(charCode);

    if (!charString.match(/^[0-9\b]+$/)) {
      e.preventDefault();
    }
  };

  return (
    <>
      <AuthContainer>
        <Header>
          <AuthLink to={props.isProfile ? "/profile" : "/login"}>
            <Icon />
            <h1>Reset Password</h1>
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
            suffix={
              <Btn otp={true} login={false}>
                OTP
              </Btn>
            }
            style={{ marginBottom: "1rem" }}
          />
          <Input
            placeholder="New Password"
            prefix={<KeyOutlined />}
            maxLength={12}
            style={{ marginBottom: "1rem", height: "40px" }}
          />
        </InputBoxes>

        <AuthLink to={"/reset-password"}>
          <Btn otp={false}>Continue</Btn>
        </AuthLink>
      </AuthContainer>
    </>
  );
};

export default ForgotPassword;
