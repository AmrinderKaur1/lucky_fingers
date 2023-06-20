import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { socket } from "../../Socket";

import { socket } from "../Socket";

import {
  getParityRecord,
  getUserParityRecord,
  setMinutes,
  setPeriodId,
  setRandomNum,
  setSeconds,
  setShowNumber,
  setStartCountdown,
  setTimeExpires,
} from "../redux/game/game.actions";

const useGameHook = () => {
  const dispatch = useDispatch();

  const { startCountdown, minutes, seconds, userEmail, timeExpires, } = useSelector((state) => ({
    startCountdown: state.game.startCountdown,
    minutes: state.game.minutes,
    seconds: state.game.seconds,
    userEmail: state.login.userEmail,
    timeExpires: state.game.timeExpires,
  }));

  useEffect(() => {
    let interval;
    if (startCountdown) {
      interval = setInterval(() => {
        const currentTime = new Date(Date.now());
        const timeDiff = +timeExpires - +currentTime;
        if (seconds === 0 && minutes === 0) {
          dispatch(setShowNumber(true));
          dispatch(setStartCountdown(false));
          dispatch(setMinutes(null));
          dispatch(setSeconds(null));
          // call api to update parity record
          dispatch(
            getParityRecord(
              "http://localhost:4000/game/getAllPeriodRecords",
              { offset: 0, limit: 10 },
              {
                "Content-Type": "application/json",
                Authorization: localStorage?.jwtToken,
              }
            )
          );
          dispatch(
            getUserParityRecord(
              `http://localhost:4000/game/getCurrentUserParityRecord`,
              { offset: 0, limit: 10, userEmail },
              {
                "Content-Type": "application/json",
                Authorization: localStorage?.jwtToken,
              }
            )
          );
        } else {
          dispatch(setMinutes(Math.floor((timeDiff / 1000 / 60) % 60)));
          dispatch(setSeconds(Math.floor((timeDiff / 1000) % 60)));
        }
      }, [1000]);
    }
    return () => clearInterval(interval);
  }, [startCountdown, minutes, seconds]);

  // event listenerz`
  useEffect(() => {
    function onFooEvent(value) {
      console.log(value);
      dispatch(setShowNumber(false));
      dispatch(setStartCountdown(true));
      dispatch(setRandomNum(value?.randomNumber));
      dispatch(setPeriodId(value?.id));
      dispatch(setTimeExpires(new Date(value?.timeExpires)));
    }
    socket.on("api", onFooEvent);

    return () => {
      socket.off("api", onFooEvent);
    };
  }, []);
};

export default useGameHook;
