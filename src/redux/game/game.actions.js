import axios from "axios";
import * as gameActions from "./game.constants";

export const setTotalPeriodData = (payload) => ({
  type: gameActions.SET_TOTAL_PERIOD_DATA,
  payload,
});

export const setParityRecord = (payload) => ({
  type: gameActions.SET_PARITY_RECORD,
  payload,
});

export const setMyParityRecord = (payload) => ({
  type: gameActions.SET_MY_PARITY_RECORD,
  payload,
});

export const getParityRecord = (url, data, headers) => (dispatch) => {
  axios
    .post(url, data, { headers })
    .then((res) => {
      console.log("axios in action");
      dispatch(setTotalPeriodData(res?.data?.totalLen));
      dispatch(setParityRecord(res?.data?.periodsList));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getUserParityRecord = (url, data, headers) => (dispatch) => {
  axios
    .post(url, data, { headers })
    .then((res) => {
      console.log(res, "res");
      dispatch(setMyParityRecord(res?.data?.[0].bets));
    })
    .catch((err) => console.log(err, "rr"));
};
