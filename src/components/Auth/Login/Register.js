import React, { useState, useCallback } from "react";
import {
  ShoppingOutlined,
  MobileOutlined,
  CodeOutlined,
  KeyOutlined,
} from "@ant-design/icons";
import { Input, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  AuthContainer,
  Header,
  Icon,
  InputBoxes,
  AuthLink,
  Btn,
} from "./LoginElements";
import Footer from "../../Footer";
import { setUserAuthenticated } from "../../../redux/auth/auth.actions";

export const handleNumericKeyPress = (e) => {
  const charCode = e.charCode != null ? e.charCode : e.keyCode;
  const charString = String.fromCharCode(charCode);

  if (!charString.match(/^[0-9\b]+$/)) {
    e.preventDefault();
  }
};

const Register = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [password, setPassword] = useState("");
  const [mobileNum, setMobNum] = useState("");
  const [verifCode, setVerifCode] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [isAgreed, setAgreed] = useState(false);

  const onChange = () => {
    setAgreed(!isAgreed);
  };

  const changeHandler = useCallback((inputBx, e) => {
    if (inputBx === "mobileNum") {
      setMobNum(e.target.value);
    } else if (inputBx === "verifCode") {
      setVerifCode(e.target.value);
    } else if (inputBx === "password") {
      setPassword(e.target.value);
    } else {
      setPromoCode(e.target.value);
    }
  }, []);

  const handleRegister = useCallback(() => {

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
            <h1>Register</h1>
          </AuthLink>
        </Header>
        <InputBoxes>
          <Input
            placeholder="Mobile Number"
            prefix={<MobileOutlined />}
            onKeyPress={handleNumericKeyPress}
            maxLength={10}
            style={{ marginBottom: "1rem", height: "40px" }}
            name="mobnum"
            value={mobileNum}
            onChange={(e) => changeHandler("mobileNum", e)}
          />
          <Input
            placeholder="Verification Code"
            prefix={<CodeOutlined />}
            onKeyPress={handleNumericKeyPress}
            maxLength={6}
            suffix={
              <Btn login={false} otp={true}>
                OTP
              </Btn>
            }
            style={{ marginBottom: "1rem" }}
            name="otpcode"
            value={verifCode}
            onChange={(e) => changeHandler("verifCode", e)}
          />
          <Input
            placeholder="Password"
            prefix={<KeyOutlined />}
            maxLength={12}
            style={{ marginBottom: "1rem", height: "40px" }}
            name="password"
            value={password}
            onChange={(e) => changeHandler("password", e)}
          />
          <Input
            placeholder="Reccomendation Code"
            prefix={<ShoppingOutlined />}
            maxLength={12}
            style={{ marginBottom: "1rem", height: "40px" }}
            name="recomend code"
            value={promoCode}
            onChange={(e) => changeHandler("promoCode", e)}
          />
          <Checkbox onChange={onChange} value={isAgreed}>
            I agree &nbsp;
            <AuthLink to={"/privacy"}>
              <a href="">PRIVACY POLICY</a>
            </AuthLink>
          </Checkbox>
        </InputBoxes>

        <AuthLink to={"/register"}>
          <Btn
            otp={false}
            disabled={
              !mobileNum || !verifCode || !password || !promoCode || !isAgreed
            }
            onClick={handleRegister}
          >
            Register
          </Btn>
        </AuthLink>
      </AuthContainer>
      <Footer />
    </>
  );
};

export default Register;
