import React from "react";
import { Divider } from "antd";
import { Empty } from "antd";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";

import { Header, AuthLink, Icon } from "../Auth/Login/LoginElements";
import {
  RecordCol,
  RecordRow,
  Page,
  ArrowIcons,
  RecordContainer,
} from "./RechargeRecord";

const transactionRec = [];

const Transactions = () => {
  return (
    <RecordContainer>
      <Header>
        <AuthLink to={"/profile"}>
          <Icon />
          <h1>Transactions</h1>
        </AuthLink>
      </Header>
      {!transactionRec.length && <Empty />}
      <Divider style={{ margin: "5px 0" }} />
      <RecordRow>
        <RecordCol span={24}>
          <Page>1-2 of 300</Page> &nbsp;
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

export default Transactions;
