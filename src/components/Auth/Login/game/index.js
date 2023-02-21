import React, { useCallback, useState } from "react";
import { Row, Col, Table, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { TrophyOutlined, ReconciliationOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

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
  ParityRecordCont,
  DividerZero,
  Rounds,
  RecordTable,
} from "./GameElements";
import { CardContainer, Btn } from "../../../MyProfile/MyProfileElements";
import GameModal from "./GameModal";
import { handleChangeModalVisibility } from "../../../../helpers/modals";
import { playOptionButtons } from "../../../../helpers/heads";

const betValues = {
  0: "green",
  1: "blue",
  2: "red",
  3: "blue",
  4: "red",
  5: "green",
  6: "red",
  7: "blue",
  8: "red",
  9: "blue",
};
const { Column } = Table;
const myParityValues = [];
const parityValues = [
  {
    key: "1",
    period: "20200202093939",
    price: "37384",
    number: "2",
    result: ["red", "green"],
  },
  {
    key: "1",
    period: "20200202093939",
    price: "37384",
    number: "2",
    result: ["red", "red"],
  },
  {
    key: "1",
    period: "20200202093939",
    price: "37384",
    number: "2",
    result: ["green"],
  },
  {
    key: "1",
    period: "20200202093939",
    price: "37384",
    number: "2",
    result: ["red", "green"],
  },
  {
    key: "1",
    period: "20200202093939",
    price: "37384",
    number: "2",
    result: ["blue"],
  },
  {
    key: "1",
    period: "20200202093939",
    price: "37384",
    number: "2",
    result: ["green"],
  },
  {
    key: "1",
    period: "20200202093939",
    price: "37384",
    number: "2",
    result: ["red", "blue"],
  },
  {
    key: "1",
    period: "20200202093939",
    price: "37384",
    number: "2",
    result: ["blue", "green"],
  },
  {
    key: "1",
    period: "20200202093939",
    price: "37384",
    number: "2",
    result: ["red"],
  },
  {
    key: "1",
    period: "20200202093939",
    price: "37384",
    number: "2",
    result: ["red"],
  },
];
const BetGame = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalColor, setModalColor] = useState("");
  const [activeId, setActiveId] = useState(1);

  const handleBtnRecharge = () => {
    navigate("/pages/person/recharge");
  };

  const showModal = (clr) => {
    const modalName =
      clr === "green"
        ? "isJoinGreenVisible"
        : clr === "blue"
        ? "isJoinBlueVisible"
        : "isJoinRedVisible";
    handleChangeModalVisibility(true, modalName, dispatch);
    setIsModalOpen(true);
    setModalColor(clr);
  };

  const activeHandler = (id) => {
    setActiveId(id);
  };

  return (
    <>
      <GameContainer>
        {/* card  */}
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
        {/* game and parity  */}
        <MainContainer>
          <PlayOptionHeader>
            {playOptionButtons.map((element, index) => {
              return (
                <PlayOption
                  onClick={() => setActiveId(element.id)}
                  className={element.id === activeId ? "active" : ""}
                  key={index}
                >
                  {element.name}
                </PlayOption>
              );
            })}
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
              <GameButton color={"green"} onClick={() => showModal("green")}>
                Join Green
              </GameButton>
              <GameButton color={"blue"} onClick={() => showModal("blue")}>
                Join Blue
              </GameButton>
              <GameButton color={"red"} onClick={() => showModal("red")}>
                Join Red
              </GameButton>
            </BetDesBtns>
            {/* {renderButtonRows()} */}
            <BetButtonsRow>
              <GameButton childBtns color={"green"}>
                0
              </GameButton>
              <GameButton childBtns color={"blue"}>
                1
              </GameButton>
              <GameButton childBtns color={"red"}>
                2
              </GameButton>
              <GameButton childBtns color={"blue"}>
                3
              </GameButton>
              <GameButton childBtns color={"red"}>
                4
              </GameButton>
            </BetButtonsRow>
            <BetButtonsRow>
              <GameButton childBtns color={"green"}>
                5
              </GameButton>
              <GameButton childBtns color={"red"}>
                6
              </GameButton>
              <GameButton childBtns color={"blue"}>
                7
              </GameButton>
              <GameButton childBtns color={"red"}>
                8
              </GameButton>
              <GameButton childBtns color={"blue"}>
                9
              </GameButton>
            </BetButtonsRow>
          </DisplayGame>
        </MainContainer>
        <ParityRecordCont>
          <PlayOptionHeader>
            <div>
              <TrophyOutlined />
              &nbsp;Parity Record
            </div>
          </PlayOptionHeader>
          <DividerZero />
          <RecordTable
            dataSource={parityValues}
            pagination={{
              size: "small",
              simple: true,
              defaultCurrent: 10,
              defaultPageSize: 10,
              total: 100,
            }}
          >
            <Column title="Period" dataIndex="period" key="period" />
            <Column title="Price" dataIndex="price" key="price" />
            <Column title="Number" dataIndex="number" key="number" />
            <Column
              className="result-column"
              title="Result"
              dataIndex="result"
              key="result"
              render={(result) => (
                <>
                  {result.map((res) => (
                    <>
                      <Rounds key={res} color={res} />
                      &nbsp;
                    </>
                  ))}
                </>
              )}
            />
          </RecordTable>
        </ParityRecordCont>

        {/* my parity record  */}
        <ParityRecordCont>
          <PlayOptionHeader>
            <div>
              <ReconciliationOutlined />
              &nbsp;My Parity Record
            </div>
          </PlayOptionHeader>
          <DividerZero />
          <RecordTable
            dataSource={myParityValues}
            pagination={{
              size: "small",
              simple: true,
              defaultCurrent: 10,
              defaultPageSize: 10,
              total: 100,
            }}
          >
            <Column title="Period" dataIndex="period" key="period" />
            <Column title="Price" dataIndex="price" key="price" />
            <Column title="Number" dataIndex="number" key="number" />
            <Column
              className="result-column"
              title="Result"
              dataIndex="result"
              key="result"
              render={(result) => (
                <>
                  {result.map((res) => (
                    <>
                      <Rounds key={res} color={res} />
                      &nbsp;
                    </>
                  ))}
                </>
              )}
            />
          </RecordTable>
        </ParityRecordCont>
        {isModalOpen && <GameModal color={modalColor} />}
      </GameContainer>
      <Footer isAuthenticated={true} />
    </>
  );
};

export default BetGame;
