import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";

import rootReducer from "./root-reducer";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development'){ //'production', 'test'
    middleWares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middleWares))

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store)


const storeDefault = {store, persistor};
export default storeDefault;