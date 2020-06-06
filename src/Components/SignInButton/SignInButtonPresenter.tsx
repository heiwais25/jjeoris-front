import React from "react";
import styled from "../../Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Naver, Kakao } from "../../Icons";

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

type IOAuthProvider = "google" | "kakao" | "naver";

const buttonTexts: { [key in IOAuthProvider]: string } = {
  google: "구글로 로그인",
  kakao: "카카오로 로그인",
  naver: "네이버로 로그인",
};

const buttonBgcolors: { [key in IOAuthProvider]: string } = {
  google: "#4081ED",
  kakao: "#FFEB00",
  naver: "#00CA30",
};

const buttonColors: { [key in IOAuthProvider]: string } = {
  google: "white",
  kakao: "black",
  naver: "white",
};

const buttonIcons: { [key in IOAuthProvider]: JSX.Element } = {
  google: <FontAwesomeIcon icon={faGoogle} />,
  kakao: <Kakao />,
  naver: <Naver />,
};

type IProps = {
  onClick: () => void;
  type: IOAuthProvider;
};

export default ({ onClick, type }: IProps) => (
  <ButtonWrapper
    onClick={onClick}
    data-bgcolor={buttonBgcolors[type]}
    data-color={buttonColors[type]}
  >
    <Column>
      <Icon>{buttonIcons[type]}</Icon>
    </Column>
    <Column>
      <Text>{buttonTexts[type]}</Text>
    </Column>
  </ButtonWrapper>
);
