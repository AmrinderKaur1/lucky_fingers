import React, { useCallback, useState } from "react";
import {
  MobileOutlined,
  CodeOutlined,
  KeyOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";

import {
  AuthContainer,
  Btn,
  Header,
  Icon,
  InputBoxes,
  AuthLink,
} from "./LoginElements";
import { setUserAuthenticated } from "../../../redux/auth/auth.actions";
import { auth } from "../../../Firebase";
import useGameHook from "../../../helpers/useGameHook";

const ForgotPassword = (props) => {
  const gameHook = useGameHook();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");

  const changeHandler = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    [email]
  );

  const handleForgotPassword = useCallback(() => {
    sendPasswordResetEmail(auth, email)
      .then((res) => {
        console.log(res, "res");
      })
      .catch((err) => {
        console.log(err, "err");
      });
    // set in local storge as well
    dispatch(setUserAuthenticated(true));
    // navigate to /profile
    navigate("/profile");
  }, [email]);

  return (
    <>
      <AuthContainer>
        <Header>
          <AuthLink to={props.isProfile ? "/profile" : "/login"}>
            <Icon />
            <h1>Forgot Password</h1>
          </AuthLink>
        </Header>
        <InputBoxes>
          <Input
            placeholder="Email"
            prefix={<MailOutlined />}
            type="email"
            style={{ marginBottom: "1rem", height: "40px" }}
            value={email}
            onChange={(e) => changeHandler(e)}
          />
        </InputBoxes>

        <AuthLink to={"/forgot-password"}>
          <Btn otp={false} disabled={!email} onClick={handleForgotPassword}>
            Continue
          </Btn>
        </AuthLink>
      </AuthContainer>
    </>
  );
};

export default ForgotPassword;
