import * as gameActions from './game.constants';

export const gameInitialState = {
  totalPeriodData: 0,
  parityRecordData: [],
  myParityRecord: [],
}

export default (state = gameInitialState, action) => {
  switch (action.type) {
    case gameActions.SET_TOTAL_PERIOD_DATA:
      return { ...state, totalPeriodData: action.payload };
    case gameActions.SET_PARITY_RECORD:
      return { ...state, parityRecordData: action.payload };
    case gameActions.SET_MY_PARITY_RECORD:
      return { ...state, myParityRecord: action.payload };
    default:
      return state;
  }

}