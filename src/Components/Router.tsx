import React from "react";
import { Switch, Redirect, Route, useLocation } from "react-router-dom";
import styled from "../Styles/index";
import Header from "./Header";
import Explore from "../Routes/Explore";
import { Container } from "@material-ui/core";
import SignIn from "../Routes/SignIn";
import { useSelector } from "react-redux";
import { authSelector } from "../Slices";

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
  const { isSignedIn, loading, user } = useSelector(authSelector);
  const { pathname } = useLocation();

  const isHeaderIncluded = !pathname.startsWith("/auth");
  return (
    <ContainerWrapper>
      <ContentWrapper>
        {isHeaderIncluded && <Header />}
        <Switch>
          <Route exact path="/" component={Explore} />

          {/* Auth Pages */}
          <Route exact path="/auth/signin" component={SignIn} />
          <Redirect path="*" to="/" />
        </Switch>
      </ContentWrapper>
    </ContainerWrapper>
  );
};
