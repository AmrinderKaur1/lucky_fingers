import React, { useState, useCallback } from "react";
import { MobileOutlined, KeyOutlined } from "@ant-design/icons";
import { Input } from "antd";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
import { setUserAuthenticated, setUserMobnum } from "../../../redux/auth/auth.actions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector((state) => ({
    isAuthenticated: state.login.isAuthenticated,
  }));
  const [isRecaptchaRequired, setRecaptchaRequired] = useState(true);
  const [recaptchaToken, setRecaptchaToken] = useState(
    "set to empty if want error message"
  );
  const [password, setPassword] = useState("");
  const [mobNum, setMobnum] = useState("");

  const recapChangeHandler = () => {
    console("make continue btn enabled if verified successfully.");
  };

  
  const handleNumericKeyPress = (e) => {
    const charCode = e.charCode != null ? e.charCode : e.keyCode;
    const charString = String.fromCharCode(charCode);

    if (!charString.match(/^[0-9\b]+$/)) {
      e.preventDefault();
    }
  };

  const recaptchaCall = () => {
    return (
      <RecaptchaContainer>
        {!recaptchaToken && (
          <RecaptchaErrorContainer>
            Please confirm you are human to continue.
          </RecaptchaErrorContainer>
        )}
        <ReCAPTCHA sitekey="site key" onChange={recapChangeHandler} />
      </RecaptchaContainer>
    );
  };

  const handleMobChange = useCallback((e) => {
    setMobnum(e.target.value);
  }, []);

  const handlePassChange = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const handleLogin = useCallback((e) => {
    // 1. until api is not implemented, setting sessionStorage token and dispatching user number
    // 2. setting isAuthenticated true as per that
    dispatch(setUserMobnum(mobNum))

    // set in local storge as well
    dispatch(setUserAuthenticated(true))
    // navigate to /profile
    navigate("/profile");
  }, [])

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
            name="usernum"
            placeholder="Mobile Number"
            prefix={<MobileOutlined />}
            onKeyPress={handleNumericKeyPress}
            maxLength={10}
            style={{ marginBottom: "1rem", height: "40px" }}
            onChange={handleMobChange}
            value={mobNum}
          />
          <Input
            name="password"
            placeholder="Password"
            prefix={<KeyOutlined />}
            maxLength={12}
            style={{ marginBottom: "1rem", height: "40px" }}
            onChange={handlePassChange}
            value={password}
          />
        </InputBoxes>
        {isRecaptchaRequired && recaptchaCall()}
          <Btn
            login="true"
            disabled={!password || mobNum.length !== 10 }
            onClick={handleLogin}
            // onClick={() => dispatch(setUserAuthenticated(!isAuthenticated))}
          >
            Continue
          </Btn>
        <ButtonSec>
          <AuthLink to={"/register"}>
            <Btn>Register</Btn>
          </AuthLink>
          <AuthLink to={"/reset-password"}>
            <Btn>Forgot Password ?</Btn>
          </AuthLink>
        </ButtonSec>
      </AuthContainer>
      <Footer />
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
