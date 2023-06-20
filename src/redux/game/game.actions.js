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

export const setPeriodId = (payload) => ({
  type: gameActions.SET_PERIOD_ID,
  payload,
})

export const setRandomNum = (payload) => ({
  type: gameActions.SET_RANDOM_NUM,
  payload,
})

export const setStartCountdown = (payload) => ({
  type: gameActions.SET_START_COUNTDOWN,
  payload,
})

export const setShowNumber = (payload) => ({
  type: gameActions.SET_SHOW_NUMBER,
  payload,
})

export const setMinutes = (payload) => ({
  type: gameActions.SET_MINUTES,
  payload,
})

export const setSeconds = (payload) => ({
  type: gameActions.SET_SECONDS,
  payload,
})

export const setTimeExpires = (payload) => ({
  type: gameActions.SET_TIME_EXPIRES,
  payload,
})

export const getParityRecord = (url, data, headers, setParityRecLoading) => (dispatch) => {
  axios
    .post(url, data, { headers })
    .then((res) => {
      dispatch(setTotalPeriodData(res?.data?.totalLen)); // length 
      dispatch(setParityRecord(res?.data?.periodsList));
      setParityRecLoading(false);
    })
    .catch(() => {
      setParityRecLoading(false);
    });
};

export const getUserParityRecord = (url, data, headers) => (dispatch) => {
  axios
    .post(url, data, { headers })
    .then((res) => {
      dispatch(setMyParityRecord(res?.data?.[0].bets));
    })
    .catch((err) => console.log(err, "rr"));
};
