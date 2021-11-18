import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { applyMiddleware, createStore } from "redux";
import { ImageReducer } from "./reducers/ImageReducer";
import persistStore from "redux-persist/es/persistStore";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = { key: "root", storage };
const PersistedReducer = persistReducer(persistConfig, ImageReducer);

export const store = createStore(
    PersistedReducer,
    { accepted: [], rejected: [], current: {} },
    applyMiddleware(thunk)
);

export const persistor = persistStore(store);
