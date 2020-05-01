import { combineReducers } from "redux";

import authReducer, { IState as IAuthState } from "./auth";

export type IRootState = { auth: IAuthState };

const rootReducer = combineReducers({
  auth: authReducer,
});

export const authSelector = (state: IRootState) => state.auth;

export default rootReducer;
