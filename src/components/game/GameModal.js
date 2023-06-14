import React, { useState, useEffect } from "react";
import { Checkbox, Button as Btn } from "antd";

import {
  GameModalByColor,
  ModalHeading,
  ModalContent,
  ContractLengthOptions,
  NumberBox,
  Operations,
  Increment,
  Decrement,
  Amount,
  Note,
  CustomModalFooter,
  DefaultPaymentOptions,
} from "./GameElements";
import { DividerZero } from "./GameElements";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeModalVisibility } from "../../helpers/modals";
import axios from "axios";

const GameModal = ({ color, heading, periodId, randomNum, numSelected }) => {
  const dispatch = useDispatch();
  const { isJoinGreenVisible, isJoinBlueVisible, isJoinRedVisible } =
    useSelector((state) => ({
      isJoinGreenVisible: state.modalStates.isJoinGreenVisible,
      isJoinBlueVisible: state.modalStates.isJoinBlueVisible,
      isJoinRedVisible: state.modalStates.isJoinRedVisible,
    }));

  const [defaultAmtSelected, setDefaultAmtSelected] = useState(10);
  const [presaleAgreed, setPresaleAgreed] = useState(false);

  const [val, setVal] = useState(0);
  let modalName =
    color === "green"
      ? "isJoinGreenVisible"
      : color === "blue"
      ? "isJoinBlueVisible"
      : "isJoinRedVisible";

  const getInvestmentTimes = () => {

    // 1. SELECT NUMBER, if the result is the same as the number you selected
    // you will get (92 times of Investment)

    // 2. JOIN GREEN, if the result shows 0,5, you will get (5 times of Investment)

    // 3. JOIN RED, if the result shows 2,4,6,8, you will get (2.5 times of Investment)

    // 4. JOIN BLUE, if the result shows 1,3,7,9, you will get (2.5 times of Investment)

    if (randomNum === numSelected) {
      return 92
    } else if (color?.toLowerCase() === 'green' && [0, 5].includes(randomNum)) {
      return 5
    } else if (color?.toLowerCase() === 'red' && [2, 4, 6, 8].includes(randomNum)) {
      return 2.5
    } else if (color?.toLowerCase() === 'blue' && [1, 3, 7, 9].includes(randomNum)) {
      return 2.5
    } else {
      // tbd
      // what if user bets on 
      // a.) number and number !== randomNum -> what investment
      // b.) if user chooses clr, and random num belongs to diff clr, -> what investment
      return 0 // from mine side in case, i.e. user lost all his invested money 
    }
  };

  const handleOk = () => {
    const params = {
      periodId,
      userEmail: "sapifeb446@oniecan.com",
      luckyDrawNum: randomNum,
      amount: defaultAmtSelected,
      selectedNum: numSelected ?? -1,
      selectedClr: color,
      timeStamp: "22",
      status: randomNum === numSelected ?? -1 ? "won" : "lost",
      amountMultipliedBy: getInvestmentTimes(),
    };

    console.log(localStorage?.jwtToken, 'localStorage?.jwtToken')
    axios
      .post("http://localhost:4000/game/bet-period", params, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage?.jwtToken,
        },
      })
      .then((res) => {
        console.log(res, "res");
      })
      .catch((err) => {
        console.log(err);
      });
    handleChangeModalVisibility(false, modalName, dispatch);
  };
  const handleCancel = () => {
    handleChangeModalVisibility(false, modalName, dispatch);
  };

  const increment = () => {
    setDefaultAmtSelected((e) => e + 1);
  };
  const decrement = () => {
    if (defaultAmtSelected > 0) {
      setDefaultAmtSelected((e) => e - 1);
    }
  };

  const handleOpen = () => {
    if (color === "green") {
      return isJoinGreenVisible;
    } else if (color === "blue") {
      return isJoinBlueVisible;
    }
    return isJoinRedVisible;
  };

  const getContractLenOptions = () => {
    return [10, 100, 1000, 10_000].map((el, idx) => {
      return (
        <DefaultPaymentOptions
          onClick={() => setDefaultAmtSelected(el)}
          key={idx * 2}
          className={defaultAmtSelected === el ? "active" : ""}
          clr={color}
        >
          {el}
        </DefaultPaymentOptions>
      );
    });
  };

  const handleManualAmtChange = (e) => {
    console.log(e.target.value, "ee");
    console.log(defaultAmtSelected, "default ");
    setDefaultAmtSelected((val) => val + e.target.value);
  };

  return (
    <GameModalByColor
      centered
      open={handleOpen()}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
      destroyOnClose={true}
      className={modalName}
      heading={heading}
    >
      <ModalHeading color={color}>{heading}</ModalHeading>
      <ModalContent>
        <p>Contract Money</p>
        {getContractLenOptions()}
        <NumberBox>
          <p>Number</p>
          <Operations>
            <Decrement onClick={decrement} disabled={val === 0}>
              -
            </Decrement>
            <Amount
              placeholder="0"
              value={defaultAmtSelected}
              onChange={handleManualAmtChange}
              maxLength={9}
            />
            <Increment onClick={increment}>+</Increment>
          </Operations>
        </NumberBox>
        <Note>
          Total contract money is {defaultAmtSelected ? defaultAmtSelected : 0}.
        </Note>
        <Checkbox onClick={() => setPresaleAgreed(!presaleAgreed)}>
          I agree &nbsp;
        </Checkbox>
        <a>PRESALE RULE</a>
      </ModalContent>
      <DividerZero color />
      <CustomModalFooter>
        <Btn onClick={handleCancel}>CLOSE</Btn>&nbsp;&nbsp;
        <Btn
          onClick={handleOk}
          active
          disabled={(defaultAmtSelected ?? 0) === 0 || !presaleAgreed}
        >
          CONFIRM
        </Btn>
      </CustomModalFooter>
    </GameModalByColor>
  );
};

export default GameModal;
