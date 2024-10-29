import { createStore } from "redux";
import rootReducer, { RootState } from "./reducers/reducer";

const store = createStore(rootReducer);

type AppDispatch = typeof store.dispatch;

export type StoreType = {
  dispatch: AppDispatch;
  getState: () => RootState;
};

export default store;
