import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  /* min-height: 0; */
  box-shadow: 0px 0px 0px;
  /* z-index: 9999; */
  background-color: #8799a3;
  color: #fff;
  display: flex;
  justify-content: space-between;
  z-index: 999;
`;

export const Logo = styled.img`
  height: 45px;
  margin-right: 14px;
`;

export const DevicePreference = styled.h1`
  width: calc(100% - 220px);
  font-size: 16px;
  /* font-family: Helvetica Neue,Helvetica,sans-serif;
    font-weight: 200; */
  margin-top: 14px;
`;

export const Download = styled.div`
  padding-top: 14px;
  margin-right: 14px;
`;

export const WelcomeBack = styled.div`
  height: 60px;
  padding-top: 0px;
  font-size: 14px;
  text-align: center;
  /* margin: 14px 0; */
  h1 {
    color: #00f;
    font-size: 18px;
    font-weight: 400;
  }
  p {
    font-size: 11px;
  }
`;
