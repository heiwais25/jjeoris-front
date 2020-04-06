import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import styled from "../Styles/index";
import Header from "./Header";
import Explore from "../Routes/Explore";
import { Container } from "@material-ui/core";
import Auth from "../Routes/Auth";

const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;

  width: 100%;
  height: 100%;
`;

export default () => {
  return (
    <ContainerWrapper>
      <ContentWrapper>
        <Switch>
          <Route exact path="/" component={Explore} />
          <Route exact path="/signin" component={Auth} />
          <Redirect path="*" to="/" />
        </Switch>
      </ContentWrapper>
    </ContainerWrapper>
  );
};
