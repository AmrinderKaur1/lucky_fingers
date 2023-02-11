import styled from "styled-components";
import { Col, Row, Button } from "antd";

export const GameContainer = styled.div`
        /* background-color: #f1f1f1; */
`;

export const MainContainer = styled.div`
border: 1px solid #f1f1f1;
`;
export const PlayOptionHeader = styled.div`
    display: flex;
    justify-content: space-around;
    div {
        height: 36px;
    display: inline-block;
    line-height: 33px;
    padding: 0 10px 15px 10px;
    font-size: 14px;
        color: #0063c5;
        font-weight: bolder;
    }
`;
export const PlayOption = styled.p`
height: 33px;
    display: inline-block;
    line-height: 30px;
    padding: 0 10px 15px 10px;
    font-size: 14px;

  /* underline  */
  border-color: #cdc6c6;
  border-bottom-style: solid;
  /* border-bottom-width: 3.1px; */
  /* width: fit-content */
`;
export const DisplayGame = styled.div`
    background-color: #f1f1f1;
    padding: 12px;
`;
export const PeriodCountdown = styled(Row)`

`;
export const Period = styled(Col)`
    text-align:left;
`;
export const Countdown = styled(Col)`
text-align:right;
`;
export const HeadingCol = styled.p`
    font-size: ${(props) => (props.size ? '1.2rem' : '0.8rem')};
    font-weight: ${(props) => (props.bold && 'bolder') };
`;
export const BetDesBtns = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 12px 0px;
`;
export const GameButton = styled(Button)`
padding: ${(props) => (props.childBtns && '4px 27px')};
    background-color: ${(props) => (props.color)};
    color: #fff;
    width: ${(props) => (props.childBtns && '')};
`;
export const BetButtonsRow = styled(Row)`
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
`;