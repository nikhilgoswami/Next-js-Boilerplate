import { composeWithDevTools } from "@redux-devtools/extension";
import type { AnyAction, Store } from "redux";
import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import type { Persistor } from "redux-persist";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import type { ThunkMiddleware } from "redux-thunk";
import thunk from "redux-thunk";

import rootReducer from "./reducers";
import rootSaga from "./sagas";
import type { RootState } from "./type";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
  thunk as ThunkMiddleware<any, any>,
  createLogger(),
];

export function configureStore(initialState: any): Store {
  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

export const store: Store<RootState, AnyAction> = configureStore({});
export const persistor: Persistor = persistStore(store);
