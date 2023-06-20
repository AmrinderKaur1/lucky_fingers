import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import thunk from "redux-thunk";
import sessionStorage from "redux-persist/es/storage/session";

import createMigrate from "redux-persist/es/createMigrate";
import { rootReducer } from "./redux/rootReducer";

import { authInitialState } from "./redux/auth/auth.reducer";
import { modalInitialState } from "./redux/modals/modals.reducer";
import { gameInitialState } from "./redux/game/game.reducer";

const MIGRATION_DEBUG = false;

const migrations = {
  0: (state) => ({
    ...state,
    login: authInitialState,
  }),
  1: (state) => ({
    ...state,
    modalStates: modalInitialState,
  }),
  2: (state) => ({
    ...state,
    game: gameInitialState,
  }),
};

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  migrate: createMigrate(migrations, { debug: MIGRATION_DEBUG }),
  whiteList: ["auth", "modalStates", "game"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));

export default store;
export const persistor = persistStore(store);
