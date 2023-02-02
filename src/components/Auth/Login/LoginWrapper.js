import React, {useState, useCallback} from "react";
import { MobileOutlined, KeyOutlined } from "@ant-design/icons";
import { Input } from "antd";

import { AuthContainer, Header, Icon, Btn, InputBoxes, AuthLink, ButtonSec } from "./LoginElements";


const Login = () => {

  const handleNumericKeyPress = (e) => {
    const charCode = e.charCode != null ? e.charCode : e.keyCode;
    const charString = String.fromCharCode(charCode);

    if (!charString.match(/^[0-9\b]+$/)) {
      e.preventDefault();
    }
  };

  return (
    <AuthContainer>
      <Header>
        <AuthLink to={"/login"}>
          <Icon />
          <h1 style={{paddingLeft: '12px'}}>Login</h1>
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
          placeholder="Password"
          prefix={<KeyOutlined />}
          maxLength={12}
          style={{ marginBottom: "1rem", height: "40px" }}
        />
      </InputBoxes>
      <AuthLink to={'/login'}><Btn login={true} >Continue</Btn></AuthLink>
      <ButtonSec>
      <AuthLink to={'/register'}><Btn login={false} >Register</Btn></AuthLink>
      <AuthLink to={'/reset-password'}><Btn login={false} >Forgot Password ?</Btn></AuthLink>
      </ButtonSec>
    </AuthContainer>
  );
};

export default Login;
