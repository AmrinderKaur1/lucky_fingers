import React, { useCallback } from "react";
import {
  HomeOutlined,
  SearchOutlined,
  UserOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// local imports
import {
  FooterContainer,
  FooterBars,
  FooterText,
  FooterIcons,
} from "./FooterElements";


const Footer = () => {
  const {isAuthenticated} = useSelector((state) => ({
    isAuthenticated: state.login.isAuthenticated,
  }))
  const navigate = useNavigate();

  const handleHomeClick = useCallback(() => {
    navigate("/", { replace: true });
  }, []);
  const handleSearchClick = useCallback(() => {
    navigate("/search", { replace: true });
  }, []);
  const handleWinClick = useCallback(() => {
    navigate("/win", { replace: true });
  }, []);
  const handleMyClick = useCallback(() => {
    isAuthenticated ? navigate("/profile") : navigate("/login");
    // navigate('/login');
  }, []);

  return (
    <FooterContainer>
      <FooterBars>
        <FooterIcons>
          <HomeOutlined />
        </FooterIcons>
        <FooterText onClick={handleHomeClick}>Home</FooterText>
      </FooterBars>
      <FooterBars>
        <FooterIcons>
          <SearchOutlined />
        </FooterIcons>
        <FooterText onClick={handleSearchClick}>Search</FooterText>
      </FooterBars>
      {isAuthenticated && (
        <FooterBars>
          <FooterIcons>
            <RocketOutlined />
          </FooterIcons>
          <FooterText onClick={handleWinClick}>Win</FooterText>
        </FooterBars>
      )}
      <FooterBars>
        <FooterIcons>
          <UserOutlined />
        </FooterIcons>
        <FooterText onClick={handleMyClick}>My</FooterText>
      </FooterBars>
    </FooterContainer>
  );
};

export default Footer;
