import { combineReducers } from "redux";

import login from "./auth/auth.reducer";
import modalStates from "./modals/modals.reducer";
import game from "./game/game.reducer";

export const rootReducer = combineReducers({ login, modalStates, game });
