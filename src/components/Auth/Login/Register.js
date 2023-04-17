import React, { useState, useCallback, useEffect } from "react";
import {
  MobileOutlined,
  KeyOutlined,
  MailOutlined,
  RightSquareOutlined,
  EyeOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Input, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import styled from "styled-components";

import {
  AuthContainer,
  Header,
  Icon,
  InputBoxes,
  AuthLink,
  Btn,
} from "./LoginElements";
import Footer from "../../Footer";
import {
  setUserAuthenticated,
  setUserEmail,
  setUserContactNum,
} from "../../../redux/auth/auth.actions";
import { auth } from "../../../Firebase";

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
  const [email, setEmail] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [isAgreed, setAgreed] = useState(false);
  const [isPwVisible, setPwVisible] = useState(false);
  const [confirmPwVisible, setConfirmPwVisible] = useState(false);
  const [confirmPassError, setConfirmPassError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [isAuthError, setAuthError] = useState(false);
  const [resCode, setResCode] = useState(200);

  const onChange = () => {
    setAgreed(!isAgreed);
  };

  const changeHandler = useCallback(
    (inputBx, e) => {
      if (inputBx === "mobileNum") {
        setMobNum(e.target.value);
      } else if (inputBx === "email") {
        setEmail(e.target.value);
        setAuthError(false);
      } else if (inputBx === "password") {
        setPassword(e.target.value);
      } else {
        setConfirmPass(e.target.value);
      }
    },
    [email, password, confirmPass, mobileNum]
  );

  const handleRegister = useCallback(() => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch(setUserAuthenticated(true));
        dispatch(setUserContactNum(mobileNum));
        dispatch(setUserEmail(email));
        // navigate to /profile
        navigate("/profile");
        console.log(res, "res")
      })
      .catch((error) => {
        // if user or email already exists        
        setAuthError(true)
        const err = JSON.stringify(error)
        console.log(typeof error, "type of err" ,  JSON.stringify(error))
        if (err.includes('auth/email-already-in-use')) {
          // email already exists, try different one, or if login instead!
          setResCode(400)
        } else {
          setResCode(422)
        }
      });
  }, [email, password]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      // console.log(user)
    });
  }, []);

  const handlePassBlur = useCallback(
    (passwd) => {
      setPwVisible(false);
      if (passwd.length < 8) {
        setPassError(true);
      }
    },
    [isPwVisible]
  );

  const handleConfirmPassBlur = useCallback(() => {
    setConfirmPwVisible(false);
    if (password !== confirmPass) {
      setConfirmPassError(true);
    }
  }, [confirmPwVisible]);

  const handleTypeOnClick = useCallback(
    (e) => {
      if (e === "password") {
        setPwVisible(!isPwVisible);
      }
      if (e === "confirmPass") {
        setConfirmPwVisible(!confirmPwVisible);
      }
    },
    [isPwVisible, confirmPwVisible]
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

  const maskedConfirmPass = () => {
    return (
      <>
        {confirmPwVisible ? (
          <EyeOutlined onClick={() => handleTypeOnClick("confirmPass")} />
        ) : (
          <EyeInvisibleOutlined
            onClick={() => handleTypeOnClick("confirmPass")}
          />
        )}
      </>
    );
  };

  const handleConfirmPassFocus = useCallback(() => {
    setConfirmPassError(false);
  }, [confirmPassError]);

  const handlePassFocus = useCallback(() => {
    setPassError(false);
  }, [passError]);

  function checkDisabled () {
    return !(mobileNum.length === 10 && password.length >= 8 && password === confirmPass && email && isAgreed && !isAuthError)
  }

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
            placeholder="Email Address"
            prefix={<MailOutlined />}
            // onKeyPress={handleNumericKeyPress}
            style={{ marginBottom: "1rem", height: "40px" }}
            name="email"
            value={email}
            onChange={(e) => changeHandler("email", e)}
            type="email"
          />
          <PasswordInput
            placeholder="Password"
            prefix={<KeyOutlined />}
            type={isPwVisible ? "text" : "password"}
            maxLength={20}
            name="password"
            value={password}
            onChange={(e) => changeHandler("password", e)}
            onBlur={() => handlePassBlur(password)}
            suffix={maskedCode()}
            error={passError}
            onFocus={handlePassFocus}
          />
          <Error error={passError}>
            {password.length < 8 && passError ? 'Password must be between 8 and 32 characters' : ""}
          </Error>
          <PasswordInput
            placeholder="Confirm Password"
            prefix={<RightSquareOutlined />}
            type={confirmPwVisible ? "text" : "password"}
            maxLength={20}
            name="confirm pass"
            value={confirmPass}
            onChange={(e) => changeHandler("confirmPass", e)}
            onBlur={handleConfirmPassBlur}
            suffix={maskedConfirmPass()}
            error={confirmPassError}
            onFocus={handleConfirmPassFocus}
          />
          <Error error={confirmPassError}>
            {password !== confirmPass && confirmPassError ? 'Passwords must be the same.' : ""}
          </Error>
          <CheckBx onChange={onChange} value={isAgreed}>
            I agree &nbsp;
            <AuthLink to={"/pages/person/privacy"}>
              <a href="">PRIVACY POLICY</a>
            </AuthLink>
          </CheckBx>
        </InputBoxes>
        {isAuthError && <AuthError>
          {resCode === 400 ? 
          <>
          Email already exists, try different one, or &nbsp;
            <AuthLink to={"/login"}>
              <a href="" >LOGIN</a>
            </AuthLink> &nbsp;
           instead! </> : 
           'Error while Registering, please try again or check your credentials !'
          }
        </AuthError> }

        <AuthLink to={"/register"}>
          <Btn
            otp={false}
            disabled={checkDisabled()}
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

export const Error = styled.p`
  color: red;
  margin-bottom: ${(props) => (props.error ? "1rem" : "0")};
  font-size: 14px;
  padding: 0 4px;
`;

const PasswordInput = styled(Input)`
  margin-bottom: ${(props) => (props.error ? "0" : "1rem")};
  height: 40px;
`;

const CheckBx = styled(Checkbox)`
  span {
    display: flex;
  }
`;

const AuthError = styled.p`
  color: red;
  display: flex;
  flex-flow: wrap;
  align-items: center;
  padding: 14px 28px;
`;