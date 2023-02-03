import React, { useState, useCallback } from "react";
import { Col, Row, Divider, Button, Modal, Input } from "antd";
import {
  UserOutlined,
  BellOutlined,
  WalletOutlined,
  CreditCardOutlined,
  HomeOutlined,
  SecurityScanOutlined,
  DownloadOutlined,
  MessageOutlined,
  QuestionCircleOutlined,
  DownOutlined,
  UpOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import {
  ProfileContainer,
  CardContainer,
  Btn,
  ContentContainer,
  DropdownContainer,
  DropdownCol,
  DropdownA,
} from "./MyProfileElements";
import Footer from "../Footer";

const Profile = () => {
  const navigate = useNavigate();
  const [openWallet, setOpenWallet] = useState(false);
  const [openAccountSec, setOpenAccountSec] = useState(false);
  const [openAppSec, setOpenAppSec] = useState(false);
  const [openAboutSec, setOpenAboutSec] = useState(false);
  const [isNoticeModalOpen, setIsNoticeModalOpen] = useState(false);
  const [isNickNameModal, setNickNameModal] = useState(false);
  const [nickName, setNickName] = useState("");

  const showModal = () => {
    setIsNoticeModalOpen(true);
  };
  const handleOk = () => {
    setIsNoticeModalOpen(false);
  };
  const handleCancel = () => {
    setIsNoticeModalOpen(false);
  };

  const noticeModal = () => {
    return (
      <Modal
        title="NOTICE"
        open={isNoticeModalOpen}
        onCancel={handleCancel}
        footer={[<Btn onClick={handleCancel}>CLOSE</Btn>]}
      >
        <p>
          Latest event: Invite members to recharge 100 rupees to get bonus 131
          rupees. About Recharge and withdrawal, you can send questions to
          email: lulumalls33@gmail.com
        </p>
      </Modal>
    );
  };

  const handleNickName = useCallback((e) => {
    setNickName(e);
  }, []);

  const nickNameModal = () => {
    return (
      <Modal
        title="Change Nick Name"
        onCancel={() => setNickNameModal(false)}
        open={isNickNameModal}
        footer={[
          <Btn onClick={() => setNickNameModal(false)}>Cancel</Btn>,
          <Btn onClick={() => setNickNameModal(false)}>Confirm</Btn>,
        ]}
      >
        <Input placeholder="Enter Nick name" onChange={handleNickName} />
      </Modal>
    );
  };

  const handleClick = (option) => {
    if (option === "Recharge") {
      navigate("/pages/person/recharge");
    } else if (option === "Withdrawl") {
      navigate("/pages/person/withdrawl");
    } else if (option === "Transactions") {
      navigate("/pages/person/transactions");
    } else if (option === "Bank Card") {
      navigate("/pages/person/bank");
    } else if (option === "Address") {
      navigate("/pages/person/address");
    } else if (option === "Reset Password") {
      navigate("/pages/person/password-reset");
    } else if (option === "Complaints and Suggestions") {
      navigate("/pages/person/complaint");
    } else if (option === "Privacy Policy") {
      navigate("/pages/person/privacy");
    } else if (option === "Risk Disclosure Agreement") {
      navigate("/pages/person/risk");
    }
  };

  const renderDropdown = (content) => {
    return content.map((val, index) => {
      return (
        <div key={index}>
          <Row onClick={() => handleClick(val)}>
            <Col span={24} style={{ padding: "0 35px", height: "20px" }}>
              {val}
            </Col>
          </Row>
          <Divider style={{ margin: "6px" }} />
        </div>
      );
    });
  };

  const handleBtnRecharge = () => {
    navigate("/pages/person/recharge");
  };

  const renderCard = () => {
    return (
      <CardContainer>
        <Row>
          <Col span={3}>
            <UserOutlined style={{ color: "#86C8BC", fontSize: "16px" }} />
          </Col>
          <Col span={19}>
            <Row>
              <Col span={24}>User:member_+918287244204</Col>
              <Col span={24} style={{ marginTop: "8px" }}>
                ID:951511
              </Col>
            </Row>
          </Col>
          <Col span={2}>
            <BellOutlined
              style={{ color: "#86C8BC", fontSize: "16px" }}
              onClick={showModal}
            />
          </Col>
        </Row>
        <Row>
          <Col span={16} style={{ marginTop: "8px" }}>
            Mobile: 8287244204
          </Col>
        </Row>
        <Row>
          <Col span={16} style={{ marginTop: "8px" }}>
            Available Balance: ₹1.3
          </Col>
        </Row>
        <Row>
          <Col span={8} style={{ marginTop: "8px" }}>
            <Btn onClick={handleBtnRecharge}>Recharge</Btn>
          </Col>
          <Col span={8} style={{ marginTop: "8px" }}>
            <Btn onClick={() => setNickNameModal(true)}>Change Nick Name</Btn>
          </Col>
        </Row>
      </CardContainer>
    );
  };
  const renderContents = () => {
    return (
      <ContentContainer>
        <Row>
          <DropdownCol span={24}>
            <DropdownContainer>
              <WalletOutlined style={{ fontSize: "12px" }} />
              &nbsp;Wallet
            </DropdownContainer>
            <DropdownA onClick={() => setOpenWallet(!openWallet)}>
              {openWallet ? <UpOutlined /> : <DownOutlined />}
            </DropdownA>
          </DropdownCol>
        </Row>
        <Divider style={{ margin: "6px" }} />
        {openWallet &&
          renderDropdown(["Recharge", "Withdrawl", "Transactions"])}
        <Row onClick={() => handleClick("Bank Card")}>
          <Col span={16} style={{ padding: "0 5px", height: "20px" }}>
            <CreditCardOutlined style={{ fontSize: "12px" }} />
            &nbsp;Bank Card
          </Col>
        </Row>
        <Divider style={{ margin: "6px" }} />
        <Row onClick={() => handleClick("Address")}>
          <Col span={16} style={{ padding: "0 5px", height: "20px" }}>
            <HomeOutlined style={{ fontSize: "12px" }} />
            &nbsp;Address
          </Col>
        </Row>
        <Divider style={{ margin: "6px" }} />
        <Row>
          <DropdownCol span={24}>
            <DropdownContainer>
              <SecurityScanOutlined style={{ fontSize: "12px" }} />
              &nbsp;Account Security
            </DropdownContainer>
            <DropdownA onClick={() => setOpenAccountSec(!openAccountSec)}>
              {openAccountSec ? <UpOutlined /> : <DownOutlined />}
            </DropdownA>
          </DropdownCol>
        </Row>
        <Divider style={{ margin: "6px" }} />
        {openAccountSec && renderDropdown(["Reset Password"])}
        <Row>
          <DropdownCol span={24}>
            <DropdownContainer>
              <DownloadOutlined style={{ fontSize: "12px" }} />
              &nbsp;App Download
            </DropdownContainer>
            <DropdownA onClick={() => setOpenAppSec(!openAppSec)}>
              {openAppSec ? <UpOutlined /> : <DownOutlined />}
            </DropdownA>
          </DropdownCol>
        </Row>
        <Divider style={{ margin: "6px" }} />
        {openAppSec && renderDropdown(["Android Download"])}
        <Row onClick={() => handleClick("Complaints and Suggestions")}>
          <Col span={16} style={{ padding: "0 5px", height: "20px" }}>
            <MessageOutlined style={{ fontSize: "12px" }} />
            &nbsp;Complaints and Suggestions
          </Col>
        </Row>
        <Divider style={{ margin: "6px" }} />
        <Row>
          <DropdownCol span={24}>
            <DropdownContainer>
              <QuestionCircleOutlined style={{ fontSize: "12px" }} />
              &nbsp; About
            </DropdownContainer>
            <DropdownA onClick={() => setOpenAboutSec(!openAboutSec)}>
              {openAboutSec ? <UpOutlined /> : <DownOutlined />}
            </DropdownA>
          </DropdownCol>
        </Row>
        <Divider style={{ margin: "6px" }} />
        {openAboutSec &&
          renderDropdown(["Privacy Policy", "Risk Disclosure Agreement"])}
      </ContentContainer>
    );
  };

  const handleLogout = useCallback(() => {
    // TODO : set isAuthenticated (redux state to be created) to false
    navigate("/login");
  }, []);

  return (
    <>
      <ProfileContainer>
        {renderCard()} {renderContents()}
        {noticeModal()}
        {nickNameModal()}
        <Btn style={{ width: "120px" }} onClick={handleLogout}>
          Logout
        </Btn>
      </ProfileContainer>
      <Footer />
    </>
  );
};

export default Profile;
