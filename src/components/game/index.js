import React, { useCallback, useEffect, useState } from "react";
import { Row, Col, Table, Popover } from "antd";
import { useNavigate } from "react-router-dom";
import { TrophyOutlined, ReconciliationOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

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
  StyledPagination,
} from "./GameElements";
import { CardContainer, Btn } from "../MyProfile/MyProfileElements";
import GameModal from "./GameModal";
import { handleChangeModalVisibility } from "../../helpers/modals";
import { numMappedToClr, playOptionButtons } from "../../helpers/heads";
import { socket } from "../../Socket";
import axios from "axios";
import {
  setTotalPeriodData,
  getParityRecord,
  getUserParityRecord,
} from "../../redux/game/game.actions";

const { Column } = Table;

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

  const { parityRecordData, totalPeriodData, userEmail, myParityRecord } =
    useSelector((state) => ({
      parityRecordData: state.game.parityRecordData,
      totalPeriodData: state.game.totalPeriodData,
      userEmail: state.login.userEmail,
      myParityRecord: state.game.myParityRecord,
    }));

  const div = totalPeriodData / limit;
  const maxPagesTotalParity = div > Math.floor(div) ? Math.floor(div) + 1 : div;

  const myParityRecordDivisor = myParityRecord?.length / limit;
  const maxPagesMyParity =
    myParityRecordDivisor > Math.floor(myParityRecordDivisor)
      ? Math.floor(myParityRecordDivisor) + 1
      : myParityRecordDivisor;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalColor, setModalColor] = useState("");
  const [randomNum, setRandomNum] = useState(0);
  const [periodId, setPeriodId] = useState(0);
  const [startCountdown, setStartCountdown] = useState(false);
  const [showNumber, setShowNumber] = useState(false);
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(30);
  const [modalHeadingText, setModalHeadingText] = useState();
  const [selectedNum, setSelectedNum] = useState(undefined);
  const [myParityDataSrc, setMyParityDataSrc] = useState(
    myParityRecord?.slice(0, limit)
  );

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
          // call api to update parity record
          dispatch(
            getParityRecord(
              "http://localhost:4000/game/getAllPeriodRecords",
              { offset: 0, limit },
              {
                "Content-Type": "application/json",
                Authorization: localStorage?.jwtToken,
              }
            )
          );
          dispatch(
            getUserParityRecord(
              `http://localhost:4000/game/getCurrentUserParityRecord`,
              { offset: 0, limit, userEmail },
              {
                "Content-Type": "application/json",
                Authorization: localStorage?.jwtToken,
              }
            )
          );
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

  const handlePageChange = (page, tableName) => {
    const offsetVal = (page - 1) * 10; // limit = 10 here

    const params = {
      offset: offsetVal,
      limit,
    };

    if (tableName === "parityRec") {
      dispatch(
        getParityRecord(
          "http://localhost:4000/game/getAllPeriodRecords",
          params,
          {
            "Content-Type": "application/json",
            Authorization: localStorage?.jwtToken,
          }
        )
      );
    } else {
      setMyParityDataSrc(myParityRecord?.slice(offsetVal, limit * page));
    }
  };

  const getDataSource = () => {
    const parityDataSrc = parityRecordData?.length
      ? parityRecordData?.map((el) => {
          return {
            period: el?.periodId,
            price: el?.totalBetAmt,
            number: el?.luckyDrawNum,
            color: numMappedToClr[el?.luckyDrawNum],
          };
        })
      : [];
    return parityDataSrc;
  };

  console.log(myParityRecord, "myParityRecord");

  const getMyParityDataSrc = () => {
    console.log(myParityRecord, "myParityRecord");
    return [];
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
          <RecordTable dataSource={getDataSource()} pagination={false}>
            <Column
              title="Period"
              dataIndex="period"
              key="period"
              render={(val) => {
                return (
                  <Popover content={val} placement="leftTop">
                    .... {val?.slice(val?.length - 4, val?.length)}
                  </Popover>
                );
              }}
            />
            <Column title="Price" dataIndex="price" key="price" />
            <Column title="Number" dataIndex="number" key="number" />
            <Column
              className="result-column"
              title="Result"
              dataIndex="color"
              key="color"
              render={(result) => <Rounds key={result} color={result} />}
            />
          </RecordTable>
          <StyledPagination
            simple
            defaultCurrent={1}
            onChange={(page) => handlePageChange(page, "parityRec")}
            total={maxPagesTotalParity * 10}
          />
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
          <RecordTable dataSource={myParityDataSrc} pagination={false}>
            <Column
              title="Period"
              dataIndex="periodId"
              key="periodId"
              render={(data) => {
                return (
                  <Popover content={data} placement="leftTop">
                    .... {data.slice(data?.length - 4, data?.length)}
                  </Popover>
                );
              }}
            />
            <Column title="Price" dataIndex="amount" key="amount" />
            <Column
              title="Bet"
              dataIndex="selectedNum"
              className="result-column"
              key="selectedNum"
              render={(selectedNum, dataElt) => {
                return dataElt?.selectedClr ? (
                  <Rounds
                    key={dataElt?.selectedClr}
                    color={dataElt?.selectedClr}
                  />
                ) : (
                  <>{selectedNum}</>
                );
              }}
            />
            <Column
              title="Won"
              dataIndex="amountMultipliedBy"
              key="amountMultipliedBy"
              render={(data, dataElt) => {
                return (
                  <>
                    {data}*{dataElt?.amount} ={" "}
                    <span style={{ color: "#75d175" }}>(</span>
                    {data * dataElt?.amount}
                    <span style={{ color: "#75d175" }}>)</span>
                  </>
                );
              }}
            />
          </RecordTable>
          <StyledPagination
            simple
            defaultCurrent={1}
            onChange={(page) => handlePageChange(page, "myParity")}
            total={maxPagesMyParity * 10}
          />
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
