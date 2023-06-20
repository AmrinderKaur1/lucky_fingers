import React from "react";
import { DownloadOutlined } from "@ant-design/icons";

import {
  HeaderContainer,
  Logo,
  DevicePreference,
  Download,
  WelcomeBack,
} from "./HomeHeaderElements";
import logo from "../../images/logo.png";

function HeaderHome() {
  return (
    <>
      <HeaderContainer>
        <Logo src={logo} alt="logo" style={{ height: "45px" }} />
        <DevicePreference>Open With an App</DevicePreference>
        <Download>
          <DownloadOutlined />
        </Download>
      </HeaderContainer>
      <WelcomeBack>
        <h1>Welcome Back</h1>
        <p>Quality Guarantee</p>
      </WelcomeBack>
    </>
  );
}

export default HeaderHome;
