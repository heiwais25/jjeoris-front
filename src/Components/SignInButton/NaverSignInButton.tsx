import React, { useEffect } from "react";
import { Naver } from "../../Icons";
import SignInButton, { ISuccessArgs } from "./SignInButton";
import useNaver, { INaverUser, NAVER_DEFAULT_BUTTON_ID } from "../../Hooks/useNaver";
import { useLocation } from "react-router-dom";

type IProps = {
  bgColor?: string;
  color?: string;
  text?: string;
  icon?: JSX.Element;
  onSuccess: (args: ISuccessArgs) => void;
  onFailure: () => void;
};

export default ({
  bgColor = "#00CA30",
  color = "white",
  text = "네이버로 로그인",
  icon = <Naver />,
  onSuccess,
  onFailure,
}: IProps) => {
  const { hash } = useLocation();

  const onSuccessNaver = (res: INaverUser) => {
    onSuccess({ name: res.name, email: res.email });
  };

  const { signIn } = useNaver({
    clientId: process.env.REACT_APP_NAVER_CLIENT_ID || "",
    callbackUrl: process.env.REACT_APP_NAVER_CALLBACK_URL || "",
    onSuccess: onSuccessNaver,
    onFailure,
  });

  useEffect(() => {
    if (hash.includes("access_token")) {
      signIn();
    }
  }, [hash, signIn]);

  return (
    <>
      <SignInButton bgColor={bgColor} color={color} text={text} icon={icon} onClick={signIn} />
      <div id={NAVER_DEFAULT_BUTTON_ID}></div>
    </>
  );
};
