import React from "react";
import styled from "../Styles";

const Container = styled.button`
  width: 100%;
  border: 0;
  border-radius: ${(props) => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  background-color: ${(props) => props.theme.blueColor};
  text-align: center;
  padding: 5px 0px;
  font-size: 12px;
  cursor: pointer;
`;

type IProps = {
  text: string;
  onClick: () => void;
};

const Button = ({ text, onClick }: IProps) => (
  <Container onClick={onClick}>{text}</Container>
);

export default Button;
