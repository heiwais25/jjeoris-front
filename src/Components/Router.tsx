import React from "react";
import { Switch, Redirect, Route, useLocation } from "react-router-dom";
import styled from "../Styles/index";
import Header from "./Header";
import Explore from "../Routes/Explore";
import SignIn from "../Routes/SignIn";
import { Profile } from "../Icons";
import { getAccessToken } from "../Service/localStorageService";
import { useDispatch } from "react-redux";
import { setSignedIn, setSignedOut } from "../Slices/auth";
import { useEffect, useCallback } from "react";

const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
`;

// Split the auth page and other page
export default () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const checkSignIn = useCallback(() => {
    if (getAccessToken()) {
      dispatch(setSignedIn());
    } else {
      dispatch(setSignedOut());
    }
  }, [dispatch]);

  useEffect(() => {
    checkSignIn();
    setInterval(() => {
      checkSignIn();
    }, 5000);
  }, [checkSignIn]);

  const isHeaderIncluded = !pathname.startsWith("/auth");
  return (
    <ContainerWrapper>
      <ContentWrapper>
        {isHeaderIncluded && <Header />}
        <Switch>
          <Route exact path="/" component={Explore} />

          {/* Auth Pages */}
          <Route path="/auth/signin" component={SignIn} />
          <Route path="/profile" component={Profile} />
          <Redirect path="*" to="/" />
        </Switch>
      </ContentWrapper>
    </ContainerWrapper>
  );
};
