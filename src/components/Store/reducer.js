import { createStore, applyMiddleware } from 'redux';
import { persistStore, createMigrate, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import storage from 'redux-persist-indexeddb-storage';

import rootReducer from './reducer';

const migrations = {
  0: (state) => ({
    // migration clear out device state
    ...state,
    messagesCache: undefined,
  }),
  1: (state) => ({
    // migration to keep only device state
    messagesCache: state.messages.messagesCache,
  }),
};

const persistConfig = {
  key: 'root',
  version: 1,
  storage: storage('WebmailDB'),
  migrate: createMigrate(migrations, { debug: false }),
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(store, null, () => {});

export default () => ({ store, persistor });
