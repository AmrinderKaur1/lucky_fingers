import React from "react";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";
import { TrophyOutlined } from "@ant-design/icons";

import Footer from "../../../Footer";
import {
  GameContainer,
  MainContainer,
  PlayOption,
  PlayOptionHeader,
  DisplayGame,
  Period,
  Countdown,
  PeriodCountdown,
  HeadingCol,
  BetDesBtns,
  GameButton,
  BetButtonsRow,
} from "./GameElements";
import { CardContainer, Btn } from "../../../MyProfile/MyProfileElements";

const betValues = {'0': 'green', '1': 'blue', '2': 'red', '3': 'blue', '4': 'red', '5': 'green', 
'6': 'red', '7': 'blue', '8': 'red', '9': 'blue'}
const BetGame = () => {
  const navigate = useNavigate();

  const handleBtnRecharge = () => {
    navigate("/pages/person/recharge");
  };

  // const renderButtonRows = () => {
  //   return (
  //     {Object.keys(betValues)}
  //     <GameButton childBtns color={'green'}>0</GameButton>
  //   )
  // }
  return (
    <>
      <GameContainer>
        <CardContainer>
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
              <Btn>Read Rules</Btn>
            </Col>
          </Row>
        </CardContainer>
        <MainContainer>
          <PlayOptionHeader>
            <PlayOption>Parity</PlayOption>
            <PlayOption>Sapre</PlayOption>
            <PlayOption>Bcone</PlayOption>
            <PlayOption>Emerd</PlayOption>
          </PlayOptionHeader>
          <DisplayGame>
            <PeriodCountdown>
              <Period span={12}>
                <HeadingCol>
                  <TrophyOutlined />
                  &nbsp;Period <br />
                </HeadingCol>
                <HeadingCol size>20230209458</HeadingCol>
              </Period>
              <Countdown span={12}>
                <HeadingCol>Count down</HeadingCol>
                <HeadingCol size bold>
                  02:12
                </HeadingCol>
              </Countdown>
            </PeriodCountdown>
            <BetDesBtns>
              <GameButton color={'green'}>Join Green</GameButton>
              <GameButton color={'blue'}>Join Blue</GameButton>
              <GameButton color={'red'}>Join Red</GameButton>
            </BetDesBtns>
            {/* {renderButtonRows()} */}
            <BetButtonsRow>
              <GameButton childBtns color={'green'}>0</GameButton>
              <GameButton childBtns color={'blue'}>1</GameButton>
              <GameButton childBtns color={'red'}>2</GameButton>
              <GameButton childBtns color={'blue'}>3</GameButton>
              <GameButton childBtns color={'red'}>4</GameButton>
              </BetButtonsRow>
              <BetButtonsRow>
              <GameButton childBtns color={'green'}>5</GameButton>
              <GameButton childBtns color={'red'}>6</GameButton>
              <GameButton childBtns color={'blue'}>7</GameButton>
              <GameButton childBtns color={'red'}>8</GameButton>
              <GameButton childBtns color={'blue'}>9</GameButton>
            </BetButtonsRow>
          </DisplayGame>
          <PlayOptionHeader>
            <div>
          <TrophyOutlined />&nbsp;Parity Record</div>
          </PlayOptionHeader>
        </MainContainer>
      </GameContainer>
      <Footer isAuthenticated={true} />
    </>
  );
};

export default BetGame;
