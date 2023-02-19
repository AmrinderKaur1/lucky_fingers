import React, { useState, useCallback } from "react";
import { MobileOutlined, KeyOutlined } from "@ant-design/icons";
import { Input } from "antd";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import {
  AuthContainer,
  Header,
  Icon,
  Btn,
  InputBoxes,
  AuthLink,
  ButtonSec,
} from "./LoginElements";
import Footer from "../../Footer";
import { setUserAuthenticated } from "../../../redux/auth/auth.actions";

const Login = () => {
  const [isRecaptchaRequired, setRecaptchaRequired] = useState(true);
  const [recaptchaToken, setRecaptchaToken] = useState('set to empty if want error message');

  const recapChangeHandler = () => {
    console("make continue btn enabled if verified successfully.");
  };

  const {isAuthenticated} = useSelector((state) => ({
    isAuthenticated: state.login.isAuthenticated,
  }))
  const dispatch = useDispatch();
  const handleNumericKeyPress = (e) => {
    const charCode = e.charCode != null ? e.charCode : e.keyCode;
    const charString = String.fromCharCode(charCode);

    if (!charString.match(/^[0-9\b]+$/)) {
      e.preventDefault();
    }
  };

  const recaptchaCall = () => {
    return (
      <>
        <RecaptchaContainer>
          {!recaptchaToken && (
          <RecaptchaErrorContainer>
              Please confirm you are human to continue.
            </RecaptchaErrorContainer>
          )}
          <ReCAPTCHA
            sitekey="site key"
            onChange={recapChangeHandler}
          />
        </RecaptchaContainer>
      </>
    );
  };

  return (
    <>
      <AuthContainer>
        <Header>
          <AuthLink to={"/login"}>
            <Icon />
            <h1>Login</h1>
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
        {isRecaptchaRequired && recaptchaCall()}
        <AuthLink to={"/login"}>
          <Btn login={true} onClick={() => dispatch(setUserAuthenticated(!isAuthenticated))}>Continue</Btn>
        </AuthLink>
        <ButtonSec>
          <AuthLink to={"/register"}>
            <Btn login={false}>Register</Btn>
          </AuthLink>
          <AuthLink to={"/reset-password"}>
            <Btn login={false}>Forgot Password ?</Btn>
          </AuthLink>
        </ButtonSec>
      </AuthContainer>
      <Footer isAuthenticated={false} />
    </>
  );
};

export default Login;

const RecaptchaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 13px;
`;

const RecaptchaErrorContainer = styled.div`
  color: red;
  margin-bottom: 10px;
  font-size: 15px;
  font-size: 13px;
`;
