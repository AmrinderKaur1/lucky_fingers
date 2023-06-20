import React, { useCallback, useState } from "react";
import { MobileOutlined, CodeOutlined, KeyOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  AuthContainer,
  Btn,
  Header,
  Icon,
  InputBoxes,
  AuthLink,
} from "./LoginElements";
import { setUserAuthenticated } from "../../../redux/auth/auth.actions";

function ForgotPassword(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [mobNum, setMobNum] = useState("");
  const [verifCode, setVerifCode] = useState("");
  const [password, setPassword] = useState("");

  const handleNumericKeyPress = (e) => {
    const charCode = e.charCode != null ? e.charCode : e.keyCode;
    const charString = String.fromCharCode(charCode);

    if (!charString.match(/^[0-9\b]+$/)) {
      e.preventDefault();
    }
  };

  const changeHandler = useCallback((inputBx, e) => {
    if (inputBx === "mobileNum") {
      setMobNum(e.target.value);
    } else if (inputBx === "verifCode") {
      setVerifCode(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  }, []);

  const handleForgotPassword = useCallback(() => {
    // set in local storge as well
    dispatch(setUserAuthenticated(true));
    // navigate to /profile
    navigate("/profile");
  }, []);

  return (
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
          value={mobNum}
          onChange={(e) => changeHandler("mobileNum", e)}
        />
        <Input
          placeholder="Verification Code"
          prefix={<CodeOutlined />}
          onKeyPress={handleNumericKeyPress}
          maxLength={6}
          suffix={
            <Btn otp login={false} disabled={!verifCode}>
              OTP
            </Btn>
          }
          style={{ marginBottom: "1rem" }}
          value={verifCode}
          onChange={(e) => changeHandler("verifCode", e)}
        />
        <Input
          placeholder="New Password"
          prefix={<KeyOutlined />}
          maxLength={12}
          style={{ marginBottom: "1rem", height: "40px" }}
          value={password}
          onChange={(e) => changeHandler("password", e)}
        />
      </InputBoxes>

      <AuthLink to="/forgot-password">
        <Btn
          otp={false}
          disabled={!mobNum || !password || !verifCode}
          onClick={handleForgotPassword}
        >
          Continue
        </Btn>
      </AuthLink>
    </AuthContainer>
  );
}

export default ForgotPassword;
