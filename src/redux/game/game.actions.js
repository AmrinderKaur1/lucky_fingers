import * as gameActions from './game.constants';

export const setTotalPeriodData = (payload) => ({
  type: gameActions.SET_TOTAL_PERIOD_DATA,
  payload,
})

export const setParityRecord = (payload) => ({
  type: gameActions.SET_PARITY_RECORD,
  payload,
})
