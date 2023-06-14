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

export const getParityRecord = (url, data, headers, setParityRecLoading) => (dispatch) => {
  axios
    .post(url, data, { headers })
    .then((res) => {
      console.log("axios in action");
      setParityRecLoading(false);
      dispatch(setTotalPeriodData(res?.data?.totalLen)); // length 
      dispatch(setParityRecord(res?.data?.periodsList));
    })
    .catch((err) => {
      setParityRecLoading(false);
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
