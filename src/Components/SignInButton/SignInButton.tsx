import React from "react";
import styled from "../../Styles";

const Container = styled.div`
  width: 100%;
`;

type IWrapperProps = {
  "data-bgcolor": string;
  "data-color": string;
};

const ButtonWrapper = styled.div<IWrapperProps>`
  cursor: pointer;
  height: 40px;
  display: flex;
  background-color: ${(props) => props["data-bgcolor"]};
  border-radius: 4px;
  color: ${(props) => props["data-color"]};
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  display: flex;
  padding-left: 8px;
  align-items: center;
  font-size: 14px;
`;

export type ISuccessArgs = {
  name: string;
  email: string;
};

type IProps = {
  bgColor: string;
  color: string;
  text: string;
  icon: JSX.Element;
  onClick: () => void;
};

export default ({ bgColor, color, text, icon, onClick }: IProps) => {
  return (
    <Container>
      <ButtonWrapper onClick={onClick} data-bgcolor={bgColor} data-color={color}>
        <Column>
          <Icon>{icon}</Icon>
        </Column>
        <Column>
          <Text>{text}</Text>
        </Column>
      </ButtonWrapper>
    </Container>
  );
};
