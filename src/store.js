import { legacy_createStore as createStore } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import sessionStorage from "redux-persist/es/storage/session";

import { rootReducer } from "./redux/rootReducer";
import createMigrate from "redux-persist/es/createMigrate";

import { authInitialState } from "./redux/auth/auth.reducer";
import { modalInitialState } from "./redux/modals/modals.reducer";

const MIGRATION_DEBUG = false;

const migrations = {
  0: (state) => {
    return {
      ...state,
      login: authInitialState,
    };
  },
  1: (state) => {
    return {
      ...state,
      modalStates: modalInitialState,
    };
  },
};

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  migrate: createMigrate(migrations, { debug: MIGRATION_DEBUG }),
  whiteList: ["auth", "modalStates"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));

export default store;
export const persistor = persistStore(store);
