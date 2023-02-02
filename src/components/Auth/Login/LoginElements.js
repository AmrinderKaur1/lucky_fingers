import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
import { Button } from "antd";

export const AuthContainer = styled.div`
  /* padding: 14px; */
`;

export const AuthLink = styled(Link)`
  color: #fff;
  cursor: pointer;
  text-decoration: none;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  /* background: linear-gradient(90deg,#ff9801,#ff570a); */
  /* background: linear-gradient(329deg,#ff9801,#ff570a); */
  background: linear-gradient(179deg, #ff9801, #ff570a);
  cursor: pointer;
  color: #fff;
  margin-bottom: 1rem;
  border: none;
  h1 {
    font-size: 21px;
    /* padding-left: 20px; */
    transform: translate(10%, -39%);
  }
  .side-icon {
    /* transform: translate(-60%, 37%); */
    padding-top: 5%;
    padding-right: 3%;
  }
`;

export const SubHeadings = styled.div`
  text-align: center;
  background: #ff5600;
  border: none;
  color: #fff;
`;

export const PaymentSelectors = styled.p`
  height: 45px;
  display: inline-block;
  line-height: 45px;
  margin: 0 5px;
  padding: 0 10px 15px 10px;

  /* underline  */
  border-bottom-style: solid;
  border-bottom-width: 3.1px;
  width: fit-content;

  /* &:active {
    borderBottomColor: #ff9402;
  } */
`;

export const Icon = styled(LeftOutlined)`
  transform: translate(10%, 83%);
`;

export const Btn = styled(Button)`
  box-shadow: 2px 2px 3px rgb(0 102 204 / 20%);
  background: linear-gradient(90deg, #ff9801, #ff570a);
  padding: 0 12px;
  font-size: ${(props) => (props.otp ? "11px" : "16px")};
  color: #fff;
  /* width: 170px; */
  width: ${(props) => !props.otp && "170px"};
  margin-left: ${(props) => !props.otp && "calc(50% - 85px)"};
  height: ${(props) => !props.otp && "40px"};
`;

export const ButtonSec = styled.div`
  display: flex;
  margin-left: 62px;
  padding-top: 10px;
  button {
    margin-left: 9px;
    width: inherit;
  }
`;

export const InputBoxes = styled.div`
  padding: 14px;
`;