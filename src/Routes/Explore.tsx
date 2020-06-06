import React from "react";
import styled from "../Styles/index";
import Card from "../Components/Card";
import { Container } from "@material-ui/core";

const ContainerWrapper = styled.div`
  width: 100%;
  padding-top: 94px;
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

const Row = styled.div`
  padding: 8px;
  width: 100%;
`;

export default () => {
  return (
    <>
      <ContainerWrapper>
        <Container maxWidth="md">
          <ContentWrapper>
            <Row>
              <Card />
            </Row>
            <Row>
              <Card />
            </Row>
            <Row>
              <Card />
            </Row>
            <Row>
              <Card />
            </Row>
            <Row>
              <Card />
            </Row>
            <Row>
              <Card />
            </Row>
            <Row>
              <Card />
            </Row>
            <Row>
              <Card />
            </Row>
          </ContentWrapper>
        </Container>
      </ContainerWrapper>
    </>
  );
};
