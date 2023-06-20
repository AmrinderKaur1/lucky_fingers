import * as gameActions from './game.constants';

export const gameInitialState = {
  totalPeriodData: 0,
  parityRecordData: [],
  myParityRecord: [],
  periodId: 0,
  randomNum: 0,
  startCountdown: false,
  showNumber: false,
  minutes: null,
  seconds: null,
  timeExpires: +new Date(Date.now()),
}

export default (state = gameInitialState, action) => {
  switch (action.type) {
    case gameActions.SET_TOTAL_PERIOD_DATA:
      return { ...state, totalPeriodData: action.payload };
    case gameActions.SET_PARITY_RECORD:
      return { ...state, parityRecordData: action.payload };
    case gameActions.SET_MY_PARITY_RECORD:
      return { ...state, myParityRecord: action.payload };
    case gameActions.SET_PERIOD_ID:
      return { ...state, periodId: action.payload };
    case gameActions.SET_RANDOM_NUM:
      return { ...state, randomNum: action.payload };
    case gameActions.SET_START_COUNTDOWN:
      return { ...state, startCountdown: action.payload };
    case gameActions.SET_SHOW_NUMBER:
      return { ...state, showNumber: action.payload };
    case gameActions.SET_MINUTES:
      return { ...state, minutes: action.payload };
    case gameActions.SET_SECONDS:
      return { ...state, seconds: action.payload };
    case gameActions.SET_TIME_EXPIRES:
      return { ...state, timeExpires: action.payload };
    default:
      return state;
  }

}