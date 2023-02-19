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
} from "./GameElements";
import { DividerZero } from "./GameElements";
import { useDispatch, useSelector } from "react-redux";
import { handleChangeModalVisibility } from "../../../../helpers/modals";

const GameModal = ({ color }) => {
  const dispatch = useDispatch();
  const { isJoinGreenVisible, isJoinBlueVisible, isJoinRedVisible } = useSelector((state) => ({
    isJoinGreenVisible: state.modalStates.isJoinGreenVisible,
    isJoinBlueVisible: state.modalStates.isJoinBlueVisible,
    isJoinRedVisible: state.modalStates.isJoinRedVisible,
  }));

  const [val, setVal] = useState(0);
  let modalName =
    color === "green"
      ? "isJoinGreenVisible"
      : color === "blue"
      ? "isJoinBlueVisible"
      : "isJoinRedVisible";

  const handleOk = () => {
    handleChangeModalVisibility(false, modalName, dispatch);
  };
  const handleCancel = () => {
    handleChangeModalVisibility(false, modalName, dispatch);
  };

  const increment = () => {
    if (val <= 100) {
      setVal(val + 1);
    }
  };
  const decrement = () => {
    if (val > 0) {
      setVal(val - 1);
    }
  };

  const handleOpen = () =>{
    if (color === 'green') {
      return isJoinGreenVisible
    } else if (color === 'blue') {
      return isJoinBlueVisible
    } 
    return isJoinRedVisible
  }

  return (
    <GameModalByColor
      centered
      open={handleOpen()}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={false}
      destroyOnClose={true}
      className={modalName}
    >
      <ModalHeading color={color}>Join {color}</ModalHeading>
      <ModalContent>
        <p>Contract Money</p>
        <ContractLengthOptions>
          <p>10</p>
          <p>100</p>
          <p>1000</p>
          <p>10000</p>
        </ContractLengthOptions>
        <NumberBox>
          <p>Number</p>
          <Operations>
            <Decrement onClick={decrement} disabled={val === 0}>
              -
            </Decrement>
            <Amount
              placeholder="0"
              value={val}
              onChange={(e) => setVal(e.target.value)}
              maxLength={9}
            />
            <Increment onClick={increment}>+</Increment>
          </Operations>
        </NumberBox>
        <Note>Total contract money is 10.</Note>
        <Checkbox>
          I agree &nbsp;
          <a>PRESALE RULE</a>
        </Checkbox>
      </ModalContent>
      <DividerZero color />
      <CustomModalFooter>
        <Btn onClick={handleCancel}>CLOSE</Btn>&nbsp;&nbsp;
        <Btn onClick={handleOk} active>
          CONFIRM
        </Btn>
      </CustomModalFooter>
    </GameModalByColor>
  );
};

export default GameModal;
