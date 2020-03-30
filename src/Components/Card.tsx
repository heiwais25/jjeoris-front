import React from "react";
import styled from "../Styles/index";
import { Like, DisLike, Flag, MenuDot } from "../Icons";

const Container = styled.div`
  ${props => props.theme.whiteBox};
  padding: 16px;
`;

const Wrapper = styled.div``;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  :not(:last-child) {
    padding-bottom: 20px;
  }
`;

const DateBox = styled.div``;

const Today = styled.span`
  font-weight: 600;
  font-size: 12px;
`;

const Title = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: ${props => props.theme.blueColor};
  padding: 4px 0px;
`;

const Description = styled.p`
  padding: 4px 0px;
`;

const Example = styled.p`
  font-style: italic;
`;

const Tags = styled.div`
  color: ${props => props.theme.blueColor};
`;

const Tag = styled.span`
  :not(:last-child) {
    padding-right: 8px;
  }
`;

const Meta = styled.span`
  font-weight: 600;
`;

const Likes = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.theme.blackColor};
  border-radius: 16px;
  padding: 0px 4px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 8px;
  :not(:last-child) {
    border-right: 1px solid ${props => props.theme.blackColor};
  }
  :hover {
    color: ${props => props.theme.blueColor};
    svg {
      fill: ${props => props.theme.blueColor};
    }
  }
`;

const IconText = styled.span`
  font-size: 12px;
  padding-left: 8px;
`;

const Extras = styled.div`
  display: flex;
  align-items: center;
`;

const ExtraIcon = styled.div`
  border: 1px solid ${props => props.theme.blackColor};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 10px;
  display: flex;
  justify-content: cetner;
  align-items: center;
  :not(:last-child) {
    margin-right: 8px;
  }
  :hover {
    color: ${props => props.theme.blueColor};
    svg {
      fill: ${props => props.theme.blueColor};
    }
  }
`;

export default () => {
  return (
    <Container>
      <Wrapper>
        <Row>
          <DateBox>
            <Today>MAR 30</Today>
          </DateBox>
        </Row>
        <Row>
          <Title>Coronalingus</Title>
        </Row>
        <Row>
          <Description>Sex during the Coronavirus time of social distancing.</Description>
        </Row>
        <Row>
          <Example>
            My fiancé and I are practicing social distancing by ordering take-out and engaging in
            coronalingus.
          </Example>
        </Row>
        <Row>
          <Tags>
            <Tag>##corona #covid19 #socialdistancing</Tag>
          </Tags>
        </Row>
        <Row>
          <Meta>by xoMarilynxo March 18, 2020</Meta>
        </Row>
        <Row>
          <Likes>
            <Icon>
              <Like color="black" size={20} />
              <IconText>267</IconText>
            </Icon>
            <Icon>
              <DisLike color="black" size={20} />
              <IconText>13</IconText>
            </Icon>
          </Likes>
          <Extras>
            <ExtraIcon>
              <Flag color="black" size={20} />
            </ExtraIcon>
            <ExtraIcon>
              <MenuDot color="black" size={20} />
            </ExtraIcon>
          </Extras>
        </Row>
      </Wrapper>
    </Container>
  );
};
