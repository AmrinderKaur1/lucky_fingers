import { combineReducers } from "redux";

import login from "./auth/auth.reducer";
import modalStates from "./modals/modals.reducer"

export const rootReducer = combineReducers({ login, modalStates });
