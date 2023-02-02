import React from "react";
import styled from "styled-components";
import { Row, Col, Divider } from "antd";
import { WalletOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";

import { Header, AuthLink, Icon } from "../Auth/Login/LoginElements";

const rechargeRec = [
  {
    price: "100",
    status: "Success",
    date: "2022-11-30",
    time: "22:03:18",
  },
  {
    price: "100",
    status: "Wait",
    date: "2022-11-30",
    time: "22:03:18",
  },
];

const RechargeRecord = () => {
  const renderInfo = () => {
    return rechargeRec.map((value, index) => {
      return (
        <>
          <RecordRow key={index}>
            <Col span={2}>
              <RoundIcon recordStatus={value.status}>
                <WalletOutlined />
              </RoundIcon>
              &nbsp;
            </Col>
            <Col span={12}>
              <Data>
                {value.price}&nbsp;{value.status}
              </Data>
            </Col>
            <Col span={10}>
              <DateTime>
                {value.date}&nbsp;{value.time}
              </DateTime>
            </Col>
          </RecordRow>
          <Divider style={{ margin: "0" }} />
        </>
      );
    });
  };

  return (
    <RecordContainer>
      <Header>
        <AuthLink to={"/pages/person/recharge"}>
          {/* put link here  */}
          <Icon />
          <h1 style={{ paddingLeft: "12px" }}>Recharge Record</h1>
        </AuthLink>
      </Header>
      <Info>{renderInfo()}</Info>
      <RecordRow>
        <RecordCol span={24}>
          <Page>1-2 of 2</Page> &nbsp;
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

export default RechargeRecord;

export const Info = styled.div`
  margin: 14px;
`;
export const DateTime = styled.p`
  color: gray;
`;
export const Data = styled.p``;
export const RecordRow = styled(Row)`
  /* padding: 12px; */
  align-items: center;
  /* padding-left: 66%; */
`;
export const RoundIcon = styled.div`
  color: #fff;
  background-color: ${(props) =>
    props.recordStatus === "Success"
      ? "#39b54a;"
      : props.recordStatus === "Fail"
      ? "#e54d42"
      : "#fbbd08;"};
  border-radius: 50%;
  height: 30px;
  width: 30px;
  text-align: center;
  padding: 4px;
  transform: translate(-8px, 10px);
`;
export const ArrowIcons = styled.div`
  background-color: #f0f0f0;
  color: #000;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  text-align: center;
  padding: 6px;
`;
export const RecordCol = styled(Col)`
  text-align: right;
  display: flex;
  color: #666;
  font-size: 12px;
  align-items: center;
  padding-bottom: 12px;
  padding-left: 55%;
  /* transform: translate(-8px, 10px); */
`;
export const Page = styled.p`
    padding: 0 4px;
`;
export const RecordContainer = styled.div`
  box-shadow: 3px 3px 4px rgb(26 26 26 / 20%);
  margin-bottom: 1.8rem;
`;
