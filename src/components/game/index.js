import React, { useCallback, useEffect, useState } from "react";
import { Row, Col, Table, Pagination } from "antd";
import { useNavigate } from "react-router-dom";
import { TrophyOutlined, ReconciliationOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

import Footer from "../Footer";
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
  ModalHeading,
} from "./GameElements";
import { CardContainer, Btn } from "../MyProfile/MyProfileElements";
import GameModal from "./GameModal";
import { handleChangeModalVisibility } from "../../helpers/modals";
import { playOptionButtons } from "../../helpers/heads";
import { socket } from "../../Socket";
import axios from "axios";
import { setParityRecord, setTotalPeriodData } from "../../redux/game/game.actions";

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

const row1Options = [
  { num: 0, clr: "green" },
  { num: 1, clr: "blue" },
  { num: 2, clr: "red" },
  { num: 3, clr: "blue" },
  { num: 4, clr: "red" },
];
const limit = 10;

const row2Options = [
  { num: 5, clr: "green" },
  { num: 6, clr: "red" },
  { num: 7, clr: "blue" },
  { num: 8, clr: "red" },
  { num: 9, clr: "blue" },
];

const colorOptions = ["green", "blue", "red"];

const BetGame = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalColor, setModalColor] = useState("");
  const [activeId, setActiveId] = useState(1);
  const [randomNum, setRandomNum] = useState(0);
  const [periodId, setPeriodId] = useState(0);
  const [startCountdown, setStartCountdown] = useState(false);
  const [showNumber, setShowNumber] = useState(false);
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(30);
  const [modalHeadingText, setModalHeadingText] = useState();
  const [selectedNum, setSelectedNum] = useState(undefined);
  const [offset, setOffset] = useState(0);
  const [maxPages, setMaxPages] = useState(1)

  const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    let interval;
    if (startCountdown) {
      interval = setInterval(() => {
        if (minutes === 0 && seconds === 0) {
          setShowNumber(true);
          setStartCountdown(false);
          setMinutes(2);
          setSeconds(30);
        } else if (seconds === 0) {
          setMinutes((minutes) => minutes - 1);
          setSeconds(59);
        } else {
          setSeconds((seconds) => seconds - 1);
        }
      }, [1000]);
    }
    return () => clearInterval(interval);
  }, [startCountdown, minutes, seconds]);

  // event listenerz`
  useEffect(() => {
    function onFooEvent(value) {
      console.log(value);
      setShowNumber(false);
      setStartCountdown(true);
      setRandomNum(value?.randomNumber);
      setPeriodId(value?.id);
      setFooEvents((previous) => [...previous, value]);
    }
    socket.on("api", onFooEvent);

    return () => {
      socket.off("api", onFooEvent);
    };
  }, []);

  const handleBtnRecharge = () => {
    navigate("/pages/person/recharge");
  };

  const showModal = (clr, num) => {
    const modalName =
      clr === "green"
        ? "isJoinGreenVisible"
        : clr === "blue"
        ? "isJoinBlueVisible"
        : "isJoinRedVisible";
    handleChangeModalVisibility(true, modalName, dispatch);
    setIsModalOpen(true);
    setModalColor(clr);
    setSelectedNum(num);
  };

  const handleClrOptionClick = useCallback(
    (clr) => {
      showModal(clr);
      setModalHeadingText(`Join ${clr}`);
    },
    [modalHeadingText]
  );

  const handleNumberOptionClick = useCallback(
    (clr, num) => {
      showModal(clr, num);
      setModalHeadingText(`Select ${num}`);
    },
    [modalHeadingText]
  );

  useEffect(() => {
    axios.get('http://localhost:4000/game/getAllPeriodRecords', {
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage?.jwtToken,
      }
    }).then((res) => {
      if (res?.data) {
        const div = 19 / limit
        div > Math.floor(div) ? setMaxPages(Math.floor(div) + 1) : setMaxPages(div)
        dispatch(setTotalPeriodData(res?.data?.totalLen))
        dispatch(setParityRecord(res?.data?.periodsList));
      }
      console.log(res, '99999999999999')
    }).catch((err) => {
      console.log(err, 'err')
    })
  }, [offset, fooEvents])

  const handlePageChange = (page) => {
    const offsetVal = page * (page -1) * 10 // limit = 10 here
    setOffset(offsetVal)
    // call api to get data as soon as offset changes
  }

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
            <PlayOption className="active">Parity</PlayOption>
          </PlayOptionHeader>
          <DisplayGame>
            <PeriodCountdown>
              <Period span={12}>
                <HeadingCol>
                  <TrophyOutlined />
                  &nbsp;Period <br />
                </HeadingCol>
                <HeadingCol bold>{periodId}</HeadingCol>
              </Period>
              <Countdown span={12}>
                {startCountdown && (
                  <>
                    <HeadingCol>Count down</HeadingCol>
                    <HeadingCol size bold>
                      0{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                    </HeadingCol>
                  </>
                )}
                {showNumber && (
                  <>
                    <HeadingCol>Bet Number</HeadingCol>
                    <HeadingCol size bold>
                      {randomNum}
                    </HeadingCol>
                  </>
                )}
              </Countdown>
            </PeriodCountdown>
            <BetDesBtns>
              {colorOptions.map((clr) => {
                return (
                  <GameButton
                    color={clr}
                    onClick={() => handleClrOptionClick(clr)}
                    disabled={!startCountdown}
                  >
                    Join {clr}
                  </GameButton>
                );
              })}
            </BetDesBtns>
            <BetButtonsRow>
              {row1Options.map((el) => {
                return (
                  <GameButton
                    childBtns
                    color={el?.clr}
                    onClick={() => handleNumberOptionClick(el?.clr, el?.num)}
                    disabled={!startCountdown}
                  >
                    {el?.num}
                  </GameButton>
                );
              })}
            </BetButtonsRow>
            <BetButtonsRow>
              {row2Options.map((el) => {
                return (
                  <GameButton
                    childBtns
                    color={el?.clr}
                    onClick={() => handleNumberOptionClick(el?.clr, el?.num)}
                    disabled={!startCountdown}
                  >
                    {el?.num}
                  </GameButton>
                );
              })}
            </BetButtonsRow>
          </DisplayGame>
        </MainContainer>

        {/* parity record  */}
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
            pagination={false}
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
          <Pagination simple defaultCurrent={1} onChange={handlePageChange} total={maxPages*10}/>
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
        {isModalOpen && (
          <GameModal
            color={modalColor}
            heading={modalHeadingText}
            periodId={periodId}
            randomNum={randomNum}
            numSelected={selectedNum}
          />
        )}
      </GameContainer>
      <Footer />
    </>
  );
};

export default BetGame;
