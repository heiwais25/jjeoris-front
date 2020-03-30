import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import styled from "../Styles/index";
import Header from "./Header";
import Explore from "../Routes/Explore";
import { Container } from "@material-ui/core";

const ContainerWrapper = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  padding-top: 94px;
  width: 100%;
`;

export default () => {
  return (
    <ContainerWrapper>
      <Header />
      <Container maxWidth="md">
        <ContentWrapper>
          <Switch>
            <Route exact path="/" component={Explore} />
            <Redirect path="*" to="/" />
          </Switch>
        </ContentWrapper>
      </Container>
    </ContainerWrapper>
  );
};
