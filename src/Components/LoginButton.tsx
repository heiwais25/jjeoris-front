import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "../Styles/index";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type ContainerProps = {
  "data-bgColor": string;
};

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  background-color: ${(props) => props["data-bgColor"]};
  color: white;
  border-radius: 4px;
  cursor: pointer;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

const Text = styled.div`
  padding-left: 8px;
`;

type Props = {
  onClick: () => void;
  text: string;
  disabled?: boolean;
  bgColor?: string;
  icon?: IconProp;
};

export default ({ onClick, text, disabled, bgColor = "#fffff", icon = faGoogle }: Props) => {
  return (
    <Container onClick={onClick} data-bgColor={bgColor}>
      <Icon>
        <FontAwesomeIcon icon={icon} />
      </Icon>
      <Text>{text}</Text>
    </Container>
  );
};
