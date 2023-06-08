import * as gameActions from './game.constants';

export const gameInitialState = {
  totalPeriodData: 0,
  parityRecordData: [],
}

export default (state = gameInitialState, action) => {
  switch (action.type) {
    case action.SET_TOTAL_PERIOD_DATA:
      return { ...state, ...action.payload };
    case action.SET_PARITY_RECORD:
      return { ...state, ...action.payload };
    default:
      return state;
  }

}