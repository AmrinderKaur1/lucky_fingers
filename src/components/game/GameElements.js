import styled from "styled-components";
import {
  Col,
  Row,
  Button,
  Divider,
  Table,
  Modal,
  Input,
  Pagination,
} from "antd";

export const GameContainer = styled.div`
  margin-bottom: 44px;
  background-color: #fefbfb;
`;

export const MainContainer = styled.div`
  border-width: 1px 0;
  border-style: solid;
  border-color: #d7d4d4;
  border: 1px 0 solid #d7d4d4;
`;
export const PlayOptionHeader = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #d7d4d4;
  div {
    height: 36px;
    display: inline-block;
    line-height: 33px;
    padding: 0 10px 15px 10px;
    font-size: 14px;
    font-weight: bolder;
  }
`;
export const PlayOption = styled.p`
  height: 33px;
  display: inline-block;
  line-height: 30px;
  padding: 0 10px 15px 10px;
  font-size: 14px;
  cursor: pointer;

  &.active {
    font-weight: 600;
    /* underline  */
    border-color: black;
    border-bottom-style: solid;
  }
`;
export const DisplayGame = styled.div`
  background-color: #fefbfb;
  padding: 12px;
  border-top: 1px solid #d7d4d4;
`;
export const PeriodCountdown = styled(Row)``;
export const Period = styled(Col)`
  text-align: left;
`;
export const Countdown = styled(Col)`
  text-align: right;
`;
export const HeadingCol = styled.p`
  font-size: ${(props) => (props.size ? "1.4rem" : "1rem")};
  font-weight: ${(props) => props.bold && "bolder"};
`;
export const BetDesBtns = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 12px 0px;
`;
export const GameButton = styled(Button)`
  padding: ${(props) => props.childBtns && "4px 27px"};
  background-color: ${(props) => props.color};
  color: #fff;
  width: ${(props) => props.childBtns && ""};
`;
export const BetButtonsRow = styled(Row)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const ParityRecordCont = styled.div`
  .ant-divider-horizontal {
    margin: 0;
  }
  box-shadow: 3px 3px 4px rgb(26 26 26 / 20%);
  margin-bottom: 12px;
`;

export const DividerZero = styled(Divider)`
  margin: 0px;
  background-color: ${(props) => (props.color ? "#eeeeee" : "#0063c5")};
`;

export const Rounds = styled.div`
  height: 14px;
  width: 14px;
  border-radius: 7px;
  background-color: ${(props) =>
    props.color === "red" ? "red" : props.color === "green" ? "green" : "blue"};
`;

export const RecordTable = styled(Table)`
  .result-column {
    display: flex;
    justify-content: center;
  }
  .ant-table-pagination.ant-pagination {
    margin: 8px 0;
  }
  .ant-table {
    .ant-table-tbody {
      tr {
        th,
        td {
          padding: 2px 8px;
          font-size: 12px;
          text-align: center;
        }
      }
    }
  }
  .ant-table {
    .ant-table-thead {
      tr th {
        text-align: center;
        padding: 10px 16px;
      }
    }
  }
`;

export const GameModalByColor = styled(Modal)`
  .ant-modal-content {
    padding: 0;
  }
  .anticon svg {
    display: none;
  }
  .ant-checkbox-wrapper {
    padding: 16px 0;
    font-size: 16px;
  }
`;
export const ModalHeading = styled.div`
  padding: 14px;
  background-color: ${(props) =>
    props.color === "green"
      ? "green"
      : props.color === "blue"
      ? "blue"
      : "red"};
  color: #fff;
  text-align: center;
  font-weight: bolder;
`;

export const ModalContent = styled.div`
  padding: 25px 25px 0 25px;
`;

export const ContractLengthOptions = styled.div`
  padding: 12px 0;
  display: flex;
  p {
    padding: 0 9px;
    border-bottom: 1px solid;
    margin: 0 8px;
  }
`;

export const DefaultPaymentOptions = styled.p`
  height: 38px;
  display: inline-block;
  line-height: 45px;
  margin: 0 5px;
  padding: 0 10px 15px 10px;

  &.active {
    /* underline  */
    border-bottom-style: solid;
    border-bottom-width: 3.1px;
    width: fit-content;
    border-color: ${(props) =>
      props.clr === "red" ? "red" : props.clr === "green" ? "green" : "blue"};
  }
`;

export const NumberBox = styled.div`
  padding: 12px;
  display: flex;
  p {
    padding: 6px 0;
  }
`;

export const Operations = styled.div`
  display: flex;
  padding: 0 12px;
  /* width: 60px; */
  justify-content: space-between;
`;

export const Increment = styled.div`
  padding: 0 12px;
  align-items: center;
  font-size: 20px;
  color: #333;
  background-color: #f8f8f8;
  border-width: 0.5px;
  border-style: solid;
  border-color: #c8c7cc;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-width: 0;
  cursor: pointer;
`;

export const Decrement = styled.div`
  padding: 0 12px;
  align-items: center;
  font-size: 20px;
  color: #333;
  background-color: #f8f8f8;
  border-width: 0.5px;
  border-style: solid;
  border-color: #c8c7cc;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border-right-width: 0;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

export const Amount = styled(Input)`
  text-align: center;
  border-radius: 0;
  border-left-width: 0;
  border-right-width: 0;
  width: 100px;
`;

export const Note = styled.p`
  text-align: center;
`;

export const CustomModalFooter = styled.div`
  display: flex;
  justify-content: end;
  padding: 12px 20px;
`;

export const StyledPagination = styled(Pagination)`
  text-align: end;
  padding: 11px;
`;
