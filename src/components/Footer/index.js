import React, { useCallback, useState } from "react";
import {
  HomeOutlined,
  SearchOutlined,
  UserOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// local imports
import {
  FooterContainer,
  FooterBars,
  FooterText,
  FooterIcons,
} from "./FooterElements";
import { setActiveFooter } from "../../redux/auth/auth.actions";

function Footer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated, activeFooter } = useSelector((state) => ({
    isAuthenticated: state.login.isAuthenticated,
    activeFooter: state.login.activeFooter,
  }));

  const handleHomeClick = () => {
    dispatch(setActiveFooter("home"));
    navigate("/", { replace: true });
  };
  const handleSearchClick = () => {
    dispatch(setActiveFooter("search"));
    navigate("/search", { replace: true });
  };
  const handleWinClick = () => {
    dispatch(setActiveFooter("win"));
    navigate("/win", { replace: true });
  };
  const handleMyClick = () => {
    dispatch(setActiveFooter("profile"));
    isAuthenticated ? navigate("/profile") : navigate("/login");
    // navigate('/login');
  };

  return (
    <FooterContainer>
      <FooterBars>
        <FooterIcons className={activeFooter === "home" ? "active" : ""}>
          <HomeOutlined />
        </FooterIcons>
        <FooterText
          onClick={handleHomeClick}
          className={activeFooter === "home" ? "active" : ""}
        >
          Home
        </FooterText>
      </FooterBars>
      <FooterBars>
        <FooterIcons className={activeFooter === "search" ? "active" : ""}>
          <SearchOutlined />
        </FooterIcons>
        <FooterText
          onClick={handleSearchClick}
          className={activeFooter === "search" ? "active" : ""}
        >
          Search
        </FooterText>
      </FooterBars>
      {isAuthenticated && (
        <FooterBars>
          <FooterIcons className={activeFooter === "win" ? "active" : ""}>
            <RocketOutlined />
          </FooterIcons>
          <FooterText
            onClick={handleWinClick}
            className={activeFooter === "win" ? "active" : ""}
          >
            Win
          </FooterText>
        </FooterBars>
      )}
      <FooterBars>
        <FooterIcons className={activeFooter === "profile" ? "active" : ""}>
          <UserOutlined />
        </FooterIcons>
        <FooterText
          onClick={handleMyClick}
          className={activeFooter === "profile" ? "active" : ""}
        >
          My
        </FooterText>
      </FooterBars>
    </FooterContainer>
  );
}

export default Footer;
