import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import {
  setAccessToken,
  clearAccessToken,
} from "../Service/localStorageService";

export type IUserInfo = {
  email: string;
  username: string;
  description?: string;
};

export type IState = {
  loading: boolean;
  isSignedIn: boolean;
  user: IUserInfo;
};

export const initialState: IState = {
  loading: false,
  isSignedIn: false,
  user: {
    email: "",
    username: "",
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInStatrt: (state) => {
      state.loading = true;
    },
    signInSuccess: (
      state,
      action: PayloadAction<{ token: string; user: IUserInfo }>
    ) => {
      const { token, user } = action.payload;
      // parse token
      setAccessToken(token);
      state.loading = false;
      state.isSignedIn = true;
      state.user = user;
    },
    signInFailure: (state) => {
      state.loading = false;
    },
    setSignedIn: (state) => {
      state.isSignedIn = true;
    },
    setSignedOut: (state) => {
      clearAccessToken();
      state.isSignedIn = false;
    },
    getUserInfoSuccess: (state, action: PayloadAction<{ user: IUserInfo }>) => {
      state.user = action.payload.user;
    },
  },
});

export const {
  setSignedIn,
  setSignedOut,
  signInStatrt,
  signInSuccess,
  signInFailure,
} = authSlice.actions;
export default authSlice.reducer;

export function signIn(username: string, email: string) {
  return async (dispatch: Dispatch) => {
    dispatch(signInStatrt());

    try {
      // console.log("hi");
      const response = await axios.post("/user", {
        username: username,
        email: email,
      });
      dispatch(signInSuccess(response.data));
      // console.log("here");
      // dispatch(
      //   signInSuccess({
      //     token: "123",
      //     user: {
      //       username: "qwe",
      //       email: "qwe",
      //     },
      //   })
      // );
    } catch (error) {
      dispatch(signInFailure());
    }
  };
}

export function getUserInfo() {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get("/user");
      dispatch(signInSuccess(response.data));
    } catch (error) {
      dispatch(signInFailure());
    }
  };
}
