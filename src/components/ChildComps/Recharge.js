import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Input, Checkbox, Row, Col, Button, Divider } from "antd";
import { WalletOutlined, MenuOutlined } from "@ant-design/icons";

import { Header, AuthLink, Icon } from "../Auth/Login/LoginElements";
import { Btn } from "../MyProfile/MyProfileElements";

const Recharge = () => {
  const [rechargeAmount, setRechargeAmount] = useState("");

//   const handleChange = useCallback((amount) => {
//     setRechargeAmount(amount);
//   }, []);

  const handleClick = useCallback((amt) => {
    console.log(amt, "amount");
    setRechargeAmount(amt);
  }, []);

  const renderOptions = (options) => {
    return options.map((i, index) => {
      return (
        <Button
          key={index}
          onClick={() => handleClick(i)}
          style={{ marginRight: "2%" }}
          
        >
          {i}
        </Button>
      );
    });
  };

  const renderPaymentMethods = () => {
    const methods = [
      "fastPay(100-50000)",
      "wonpay(500-50000)",
      "SEPROPAY_UPI(200-50000)",
    ];
    return methods.map((val, index) => {
      return (
        <>
          <Row key={index} style={{ padding: "14px 0" }}>
            <Col span={10}>
              <Checkbox style={{ fontSize: "14px" }} />
            </Col>
            <Col span={14} style={{ textAlign: "right" }}>
              {val}
            </Col>
          </Row>
          <Divider style={{ margin: "0" }} />
        </>
      );
    });
  };

  return (
    <Container>
      <Header>
        <AuthLink to={"/profile"}>
          {/* put link here  */}
          <Icon />
          <h1>Recharge</h1>
        </AuthLink>
        <AuthLink to={'/pages/person/recharge-record'}><MenuOutlined /></AuthLink>
      </Header>
      <ChildContainer>
        <Balance>Balance: ₹1.3</Balance>
        <Input
          placeholder="Enter or select recharge amount"
          prefix={<WalletOutlined />}
          onChange={(e) => handleClick(e.target.value)}
          value={rechargeAmount}
        />
        <OptionsContainer>
          <Row style={{ justifyContent: "space-around", padding: "24px 0" }}>
            {renderOptions([
              "100",
              "300",
              "500",
              "1000",
              "2000",
              "5000",
              "10000",
              "50000",
            ])}
          </Row>
        </OptionsContainer>
        <Info>
          <Row>
            Tips:Please contact lulumalls33@gmail.com if you have any questions
            about the order or payment failure
          </Row>
          {renderPaymentMethods()}
        </Info>
        <PageButton>Recharge</PageButton>
      </ChildContainer>
    </Container>
  );
};

export default Recharge;

const Container = styled.div``;

export const ChildContainer = styled.div`
  margin: 14px;
`;

export const Balance = styled.p`
  text-align: center;
  font-weight: 600;
  padding-bottom: 14px;
`;
const OptionsContainer = styled.div``;
const Info = styled.div`
  background: #fefbfb;
  padding: 14px 14px 0 14px;
  transition: transform 0.2s;
  margin-bottom: 20px;
`;
export const PageButton = styled(Button)`
    background: linear-gradient(90deg,#ff9801,#ff570a);
    color: #fff;
    width: 110px;
    padding: 9px 0px;
    height: inherit;
    margin-left: calc(50% - 55px);
    .lhyGm:hover:hover {
        color: linear-gradient(90deg,#ff9801,#ff570a);
        background: #fff;
        border: 1px solid linear-gradient(90deg,#ff9801,#ff570a);
    }
`;
