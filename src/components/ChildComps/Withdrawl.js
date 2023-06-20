import React, { useState, useCallback } from "react";
import {
  CreditCardOutlined,
  UpOutlined,
  DownOutlined,
  KeyOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Input, Row, Col, Divider } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { Header, AuthLink, Icon } from "../Auth/Login/LoginElements";
import { Balance, ChildContainer, PageButton } from "./Recharge";
import {
  DropdownCol,
  DropdownContainer,
  DropdownA,
  ContentContainer,
} from "../MyProfile/MyProfileElements";

const withdrawlOptionsData = {
  option: ["Bank Card Withdrawl", "UPI Withdrawl"],
  subOption: [
    ["Karan Singh State Bank of India", "Add Bank Card"],
    ["Karan Singh623277@ybl", "Add upi-withdrawl Card"],
  ],
};

function Withdrawl() {
  const navigate = useNavigate();
  const [openSubOptionA, setOpenSubOptionA] = useState(false);
  const [openSubOptionB, setOpenSubOptionB] = useState(false);

  const handleNumericKeyPress = (e) => {
    const charCode = e.charCode != null ? e.charCode : e.keyCode;
    const charString = String.fromCharCode(charCode);

    if (!charString.match(/^[0-9\b]+$/)) {
      e.preventDefault();
    }
  };

  const handleClick = (val) => {
    if (val === "Add Bank Card" || val === "Add upi-withdrawl Card") {
      navigate("/pages/person/addbank", {
        state: {
          navigateBackTo: "/pages/person/withdrawl",
          isSelectUpiOption: val === "Add upi-withdrawl Card",
        },
      });
    }
  };

  const renderDropdown = (content) =>
    content.map((val, index) => (
      <div key={index}>
        <Row onClick={() => handleClick(val)}>
          <Col span={24} style={{ padding: "0 35px", height: "20px" }}>
            {val}
          </Col>
        </Row>
        <Divider style={{ margin: "6px" }} />
      </div>
    ));

  const renderWithdrawlOptions = () => (
    <>
      <Row>
        <DropdownCol span={24} style={{ padding: "0 15px" }}>
          <DropdownContainer>
            {withdrawlOptionsData.option[0]}
          </DropdownContainer>
          <DropdownA onClick={() => setOpenSubOptionA(!openSubOptionA)}>
            {openSubOptionA ? <UpOutlined /> : <DownOutlined />}
          </DropdownA>
        </DropdownCol>
      </Row>
      <Divider style={{ margin: "6px" }} />
      {openSubOptionA && renderDropdown(withdrawlOptionsData.subOption[0])}

      <Row>
        <DropdownCol span={24} style={{ padding: "0 15px" }}>
          <DropdownContainer>
            {withdrawlOptionsData.option[1]}
          </DropdownContainer>
          <DropdownA onClick={() => setOpenSubOptionB(!openSubOptionB)}>
            {openSubOptionB ? <UpOutlined /> : <DownOutlined />}
          </DropdownA>
        </DropdownCol>
      </Row>
      <Divider style={{ margin: "6px" }} />
      {openSubOptionB && renderDropdown(withdrawlOptionsData.subOption[1])}
    </>
  );

  // return withdrawlOptionsData.option.map((val, index) => {
  //   return (
  //     <div key={index}>
  //       <Row>
  //         <DropdownCol span={24}>
  //           <DropdownContainer>{val}</DropdownContainer>
  //           <DropdownA onClick={() => handleOptionClick(index)}>
  //             {openSubOption === index ? <UpOutlined /> : <DownOutlined />}
  //           </DropdownA>
  //         </DropdownCol>
  //       </Row>
  //       <Divider style={{ margin: "6px" }} />
  //       {/* {openSubOption !== -1 &&
  //         renderDropdown(withdrawlOptionsData.subOption[index])} */}
  //     </div>
  //   );
  // });
  return (
    <div>
      <Header>
        <AuthLink to="/profile">
          <Icon />
          <h1>Withdrawl</h1>
        </AuthLink>
        <AuthLink to="/pages/person/withdrawl-record">
          <MenuOutlined className="side-icon" />
        </AuthLink>
      </Header>
      <ChildContainer>
        <Balance>Balance: ₹1.3</Balance>
        <Input
          placeholder="Please Input Number"
          prefix={<CreditCardOutlined />}
          onKeyPress={handleNumericKeyPress}
        />
        <ContentContainer>
          <Row style={{ margin: "6px" }}>
            <Col span={16} style={{ height: "20px" }}>
              Payout
            </Col>
          </Row>
          <Divider style={{ margin: "6px" }} />
          {renderWithdrawlOptions()}
        </ContentContainer>
        <PassLabel>Enter your login password:</PassLabel>
        <Input
          placeholder="Password"
          prefix={<KeyOutlined />}
          maxLength={12}
          style={{ margin: "8px 8px 1rem 8px", height: "40px", width: "80%" }}
        />
        <PageButton>Withdrawl</PageButton>
      </ChildContainer>
    </div>
  );
}

const PassLabel = styled.label`
  font-weight: bold;
  padding: 10px;
`;
export default Withdrawl;
