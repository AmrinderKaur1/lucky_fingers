import React from "react";
import { Divider, Col } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import {
  RecordContainer,
  Info,
  RecordRow,
  ArrowIcons,
  RecordCol,
  Page,
  DateTime,
  Data,
  RoundIcon,
} from "./RechargeRecord";
import { Header, AuthLink, Icon } from "../Auth/Login/LoginElements";
import styled from "styled-components";

const withdrawlRec = [
  {
    price: "100",
    status: "Success",
    date: "2022-11-30",
    time: "22:03:18",
    feeAccount: "Fee: 30, to account: 100"
  },
  {
    price: "100",
    status: "Wait",
    date: "2022-11-30",
    time: "22:03:18",
    feeAccount: "Fee: 30, to account: 100"
  },
  {
    price: "100",
    status: "Fail",
    date: "2022-11-30",
    time: "22:03:18",
    feeAccount: "Fee: 30, to account: 100"
  },
];

const WithdrawlRecord = () => {
  const renderInfo = () => {
    return withdrawlRec.map((value, index) => {
      return (
        <>
          <RecordRow key={index}>
            <Col span={2}>
              <RoundIcon recordStatus={value.status}>₹</RoundIcon>
              &nbsp;
            </Col>
            <Col span={12}>
              <Data>
                {value.price}&nbsp;{value.status}<br/>
                <FeeAccount>{value.feeAccount}</FeeAccount>
              </Data>
            </Col>
            <Col span={10}>
              <DateTime>
                {value.date}&nbsp;{value.time}
              </DateTime>
            </Col>
          </RecordRow>
          <Divider style={{ margin: "0" }} key={index+1} />
        </>
      );
    });
  };

  return (
    <RecordContainer>
      <Header>
        <AuthLink to={"/pages/person/withdrawl"}>
          <Icon />
          <h1>Withdrawl Record</h1>
        </AuthLink>
      </Header>
      <Info>{renderInfo()}</Info>
      <RecordRow>
        <RecordCol span={24}>
          <Page>1-3 of 300</Page> &nbsp;
          <ArrowIcons>
            <LeftOutlined />
          </ArrowIcons>
          &nbsp;
          <ArrowIcons>
            <RightOutlined />
          </ArrowIcons>
        </RecordCol>
        <Divider style={{ margin: "0" }} />
      </RecordRow>
    </RecordContainer>
  );
};

const FeeAccount = styled.p`
    color: #aaa;
    padding: 5px 0;
`;

export default WithdrawlRecord;
