import React from "react";
import styled from "../Styles/index";
import Card from "../Components/Card";

const ContainerWrapper = styled.div`
  width: 100%;
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
    <ContainerWrapper>
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
    </ContainerWrapper>
  );
};
