import { legacy_createStore as createStore } from "redux";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from "redux-persist";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { rootReducer } from "./redux/rootReducer";

const persistConfig = 
    {key: 'root',
    storage,
    whiteList: ['']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(
    persistedReducer,
    applyMiddleware(thunk)  
);

export default store;
export const persistor = persistStore(store);