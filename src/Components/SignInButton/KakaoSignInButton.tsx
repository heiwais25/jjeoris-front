import React from "react";
import { Kakao } from "../../Icons";
import SignInButton, { ISuccessArgs } from "./SignInButton";
import useKakao from "../../Hooks/useKakao";

type IProps = {
  bgColor?: string;
  color?: string;
  text?: string;
  icon?: JSX.Element;
  onSuccess: (args: ISuccessArgs) => void;
  onFailure: () => void;
};

export default ({
  bgColor = "#FFEB00",
  color = "black",
  text = "카카오로 로그인",
  icon = <Kakao />,
  onSuccess,
  onFailure,
}: IProps) => {
  const { signIn } = useKakao();

  const onClick = async () => {
    try {
      const result = await signIn();
      let name = result.kakao_account.profile.nickname;
      let email = result.kakao_account.email;
      if (!!name && !!email) {
        onSuccess({ name, email });
      } else {
        throw new Error("Login Failed");
      }
    } catch (err) {
      onFailure();
    }
  };

  return (
    <SignInButton
      bgColor={bgColor}
      color={color}
      text={text}
      icon={icon}
      onClick={onClick}
      onSuccess={onSuccess}
      onFailure={onFailure}
    />
  );
};
