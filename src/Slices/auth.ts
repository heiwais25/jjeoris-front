import { createSlice, PayloadAction, Dispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { setAccessToken, clearAccessToken } from "../Service/localStorageService";

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
    signInFinish: (state) => {
      state.loading = false;
    },
    signInSuccess: (state, action: PayloadAction<{ token: string; user: IUserInfo }>) => {
      const { token, user } = action.payload;
      // Save token
      setAccessToken(token);
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
  signInFinish,
} = authSlice.actions;
export default authSlice.reducer;

export function signIn(username: string, email: string, onSuccess: () => void) {
  return async (dispatch: Dispatch) => {
    dispatch(signInStatrt());

    try {
      // Process login with real data
      // const response = await axios.post("/user", {
      //   username: username,
      //   email: email,
      // });

      const userInfo: IUserInfo = {
        email,
        username,
      };

      const token = "123";

      dispatch(signInSuccess({ token, user: userInfo }));
      onSuccess();
    } catch (error) {
      dispatch(signInFailure());
    } finally {
      dispatch(signInFinish());
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

export function signOut() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setSignedOut());
    } catch (err) {
      console.log("error", err);
    }
  };
}
