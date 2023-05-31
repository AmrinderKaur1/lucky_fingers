import React, { useState, useCallback, useEffect } from "react";
import { MobileOutlined, KeyOutlined, MailOutlined, EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { Input } from "antd";
import ReCAPTCHA from "react-google-recaptcha";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import Recaptcha from "react-recaptcha";

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
import {
  setUserAuthenticated,
  setUserEmail,
} from "../../../redux/auth/auth.actions";
import { auth } from "../../../Firebase";
import { socket } from "../../../Socket";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [email, setMobnum] = useState("");
  const [showLoginErr, setShowLoginErr] = useState(false);
  const [isPwVisible, setPwVisible] = useState(false);

  const [isRecaptchaRequired, setRecaptchaRequired] = useState(true);
  const [recaptchaToken, setRecaptchaToken] = useState('');

  const recapChangeHandler = () => {
    console("make continue btn enabled if verified successfully.");
  };

  const handleEmailChange = useCallback((e) => {
    setMobnum(e.target.value);
  }, [email]);

  const handlePassChange = useCallback((e) => {
    setPassword(e.target.value);
    setShowLoginErr(false);
  }, [password]);

  const handleLogin = useCallback(
    async(e) => {
      signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          dispatch(setUserAuthenticated(true));
          dispatch(setUserEmail(res.user.email));
          // connect to socket.io 
          socket.connect();
          // navigate to /profile
          navigate("/profile");
        })
        .catch((error) => {
          setShowLoginErr(true);
        });
    },
    [email, password]
  );

  const maskedCode = () => {
    return (
      <>
        {isPwVisible ? (
          <EyeOutlined onClick={() => handleTypeOnClick("password")} />
        ) : (
          <EyeInvisibleOutlined onClick={() => handleTypeOnClick("password")} />
        )}
      </>
    );
  };

  const handlePassBlur = useCallback(
    () => {
      setPwVisible(false);
    },
    [isPwVisible]
  );

  const handleTypeOnClick = useCallback(
    () => {
    setPwVisible(!isPwVisible);
    },
    [isPwVisible]
  );

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
            name="email"
            placeholder="Email"
            prefix={<MailOutlined />}
            style={{ marginBottom: "1rem", height: "40px" }}
            onChange={handleEmailChange}
            value={email}
            type="email"
          />
          <Input
            name="password"
            placeholder="Password"
            type={isPwVisible ? "text" : "password"}
            prefix={<KeyOutlined />}
            maxLength={12}
            style={{ marginBottom: "1rem", height: "40px" }}
            onChange={handlePassChange}
            value={password}
            onBlur={handlePassBlur}
            suffix={maskedCode()}
          />
        </InputBoxes>
        {showLoginErr && (
          <ErrMsg>
            Wrong email or password entered. No acccount ? Register instead.
          </ErrMsg>
        )}

        <Btn
          login="true"
          disabled={
            !password || email.length === 0
          }
          onClick={handleLogin}
        >
          Continue
        </Btn>
        <ButtonSec>
          <AuthLink to={"/register"}>
            <Btn>Register</Btn>
          </AuthLink>
          <AuthLink to={"/forgot-password"}>
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

export const ErrMsg = styled.p`
  color: red;
  text-align: center;
  padding: 0 20px 20px 20px;
`;
