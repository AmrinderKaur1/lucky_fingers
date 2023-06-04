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

const GameModal = ({ color, heading }) => {
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

  const handleOk = () => {
    const params = {
      periodId: "",
      userEmail: "sapifeb446@oniecan.com",
      luckyDrawNum: 0,
      amount: 0,
      selectedNum: 3,
      selectedClr: "",
      timeStamp: "22",
      status: "lost",
      amountMultipliedBy: 2,
    };
    console.log(
      "Bearer " + localStorage.getItem("authToken"),
      "'Bearer '+ localStorage.getItem('authToken')"
    );
    axios
      .post("http://localhost:4000/game/bet-period", params, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0N2JlYzFkZTg5MDU0ZDRiMjQ3MjgxNCIsImVtYWlsIjoic2FwaWZlYjQ0NkBvbmllY2FuLmNvbSIsImlhdCI6MTY4NTg0Mjk5OCwiZXhwIjoxNjg1ODQ2NTk4fQ.dT4jEf5ViL9TSKKt03PH2U0kpjgrmkV3UMckzHe_dFU",
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
