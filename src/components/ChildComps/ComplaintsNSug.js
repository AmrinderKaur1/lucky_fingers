import React, { useState, useCallback } from "react";
import {
  PlusOutlined,
  LeftOutlined,
  RightOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import { Row, Col, Checkbox, Divider } from "antd";

import {
  Header,
  AuthLink,
  Icon,
  SubHeadings,
  PaymentSelectors,
} from "../Auth/Login/LoginElements";
import {
  RecordCol,
  RecordRow,
  Page,
  ArrowIcons,
  RecordContainer,
} from "./RechargeRecord";
import { complaintStatus } from "../../helpers/heads";

const completed = ["abc", "edr", "odr"];
const waiting = ["pol", "kio", "ui"];

const ComplaintsAndSuggestions = () => {
  const [isCompleted, setIsCompleted] = useState(true);
  const [isWaiting, setIsWaiting] = useState(false);

  const renderSuggestionsComplete = () => {
    return completed.map((info, index) => {
      return (
        <ChildContainerSuggest key={index}>
          <Row>
            <Col span={22}>{info}</Col>
            <Col span={2}>
              <Checkbox checked />
            </Col>
          </Row>
        </ChildContainerSuggest>
      );
    });
  };

  const renderSuggestionsWait = () => {
    return waiting.map((info, index) => {
      return (
        <ChildContainerSuggest key={index}>
          <Row>
            <Col span={22}>{info}</Col>
            <Col span={2}>
              <ClockCircleOutlined />
            </Col>
          </Row>
        </ChildContainerSuggest>
      );
    });
  };

  const renderRecordRow = () => {
    return (
      <div
        style={{
          boxShadow: "3px 1px 2px rgb(26 26 26 / 20%)",
          paddingTop: "12px",
        }}
      >
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
      </div>
    );
  };

  const statusHandler = useCallback((idx) => {
    if (idx === 0) {
      setIsCompleted(true);
      setIsWaiting(false);
    } else {
      setIsCompleted(false);
      setIsWaiting(true);
    }
  }, []);
  return (
    <div>
      <Header style={{ marginBottom: "0" }}>
        <AuthLink to={"/profile"}>
          {/* put link here  */}
          <Icon />
          <h1 style={{ fontSize: "18px" }}>Add Complaints and Suggestions</h1>
        </AuthLink>
        <AuthLink to={"/pages/person/addComplaint"}>
          <PlusOutlined className="side-icon" />
        </AuthLink>
      </Header>
      <SubHeadings>
        {complaintStatus.map((element, idx) => {
          return (
            <PaymentSelectors
              onClick={() => statusHandler(idx)}
              className={
                (isCompleted && idx === 0) || (isWaiting && idx !== 0)
                  ? "active"
                  : ""
              }
              key={idx}
            >
              {element}
            </PaymentSelectors>
          );
        })}
      </SubHeadings>
      {isCompleted && renderSuggestionsComplete()}
      {isWaiting && renderSuggestionsWait()}
      {renderRecordRow()}
    </div>
  );
};

const ChildContainerSuggest = styled.div`
  box-shadow: 3px 1px 2px rgb(26 26 26 / 20%);
  padding: 14px;
`;

export default ComplaintsAndSuggestions;
