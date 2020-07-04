import React from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "../Styles/GlobalStyles";
import Theme from "../Styles/Theme";
import Router from "./Router";
import { ThemeProvider as MaterialThemeProvider } from "@material-ui/core";
import { materialTheme } from "../Styles/MaterialTheme";
import { useEffect } from "react";

const requiredEnvs = [
  "REACT_APP_NAVER_CLIENT_ID",
  "REACT_APP_NAVER_CALLBACK_URL",
  "REACT_APP_NAVER_CLIENT_SECRET",
  "REACT_APP_KAKAO_CLIENT_ID",
  "REACT_APP_KAKAO_CALLBACK_URL",
];

const checkRequiredEnvs = () => {
  if (requiredEnvs.some((val) => !process.env[val])) {
    alert("실행에 필요한 값이 없습니다.");
    throw Error("InvalidOperationOptions");
  }
};

export default () => {
  useEffect(() => {
    checkRequiredEnvs();
  }, []);

  return (
    <MaterialThemeProvider theme={materialTheme}>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Router />
          {/* <Footer /> */}
          <ToastContainer enableMultiContainer position={toast.POSITION.BOTTOM_LEFT} />
        </BrowserRouter>
      </ThemeProvider>
    </MaterialThemeProvider>
  );
};
