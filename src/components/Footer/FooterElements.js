import styled from "styled-components";
import React from "react";

export const FooterContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  color: #666;
  /* text-align: center; */
  box-shadow: 0 -1px 2px rgb(0 0 0 / 10%);
  display: flex;
  justify-content: space-between;
  min-height: 42px;
`;

export const FooterBars = styled.div`
  text-align: center;
  /* font-size: 9px; */
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  flex: 1;
  text-align: center;
  padding: 0;
  display: block;
  height: auto;
  line-height: 1;
  margin: 0;
  background-color: inherit;
  overflow: initial;
  &:active {
    color: red;
  }
`;

export const FooterText = styled.p`
  font-size: 9px;
  margin: 0;
  color: #666;
  &.active {
    color: #ff570a;
  }
`;

export const FooterIcons = styled.div`
  padding: 2px;
  margin-top: 4px;
  color: #666;
  &.active {
    color: #ff570a;
  }
`;
