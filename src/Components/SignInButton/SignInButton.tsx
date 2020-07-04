import React from "react";
import styled from "../../Styles";
// import NaverLogin, { NaverUser } from "react-naver-login";
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Naver, Kakao } from "../../Icons";
import useKakao from "../../Hooks/useKakao";
import useNaver, { NAVER_DEFAULT_BUTTON_ID, INaverUser } from "../../Hooks/useNaver";
import NaverSignInButton from "./NaverSignInButton";

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

type OAuthType = "google" | "kakao" | "naver";

export type ISuccessArgs = {
  name: string;
  email: string;
};

type IProps = {
  bgColor: string;
  color: string;
  text: string;
  icon: JSX.Element;
  onSuccess: (args: ISuccessArgs) => void;
  onFailure: () => void;
  onClick: () => void;
};

const buttonTexts: { [key in OAuthType]: string } = {
  google: "구글로 로그인",
  kakao: "카카오로 로그인",
  naver: "네이버로 로그인",
};

const buttonBgcolors: { [key in OAuthType]: string } = {
  google: "#4081ED",
  kakao: "#FFEB00",
  naver: "#00CA30",
};

const buttonColors: { [key in OAuthType]: string } = {
  google: "white",
  kakao: "black",
  naver: "white",
};

const buttonIcons: { [key in OAuthType]: JSX.Element } = {
  google: <FontAwesomeIcon icon={faGoogle} />,
  kakao: <Kakao />,
  naver: <Naver />,
};

export default ({ bgColor, color, text, icon, onClick, onSuccess, onFailure }: IProps) => {
  const onSuccessNaver = (res: INaverUser) => {
    onSuccess({ name: res.name, email: res.email });
  };

  const { signIn: kakaoSignIn } = useKakao();
  // const { signIn: naverSignIn } = useNaver({
  //   clientId: process.env.REACT_APP_NAVER_CLIENT_ID || "",
  //   callbackUrl: process.env.REACT_APP_NAVER_CALLBACK_URL || "",
  //   onSuccess: onSuccessNaver,
  //   onFailure: () => {},
  // });
  const onSuccessGoogle = (origResponse: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    let response = (origResponse as unknown) as GoogleLoginResponse;
    // Get id, name
    onSuccess({
      name: response.getBasicProfile().getName(),
      email: response.getBasicProfile().getEmail(),
    });
  };

  // const renderButton = (onClick: () => void) => (
  //   <ButtonWrapper
  //     onClick={onClick}
  //     data-bgcolor={buttonBgcolors[type]}
  //     data-color={buttonColors[type]}
  //   >
  //     <Column>
  //       <Icon>{buttonIcons[type]}</Icon>
  //     </Column>
  //     <Column>
  //       <Text>{buttonTexts[type]}</Text>
  //     </Column>
  //   </ButtonWrapper>
  // );

  // Only works in the kakao
  const handleSignIn = (type: OAuthType) => async () => {
    try {
      let name: string = "";
      let email: string = "";

      switch (type) {
        case "kakao":
          const result = await kakaoSignIn();
          name = result.kakao_account.profile.nickname;
          email = result.kakao_account.email;
          break;

        case "naver":
          break;

        case "google":
          break;
      }

      if (type === "kakao") {
        const result = await kakaoSignIn();
        name = result.kakao_account.profile.nickname;
        email = result.kakao_account.email;
      } else if (type === "naver") {
        // naverSignIn();
      }

      if (!!name && !!email) {
        onSuccess({ name, email });
      }
    } catch (err) {
      console.error(err);
      onFailure();
    }
  };

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
/* {type === "kakao" && renderButton(handleSignIn(type))} */

/* {type === "naver" && (
        <>
          {/* {renderButton(naverSignIn)}
          <div id={NAVER_DEFAULT_BUTTON_ID}></div> */
/* {type === "naver" && (
          <NaverLogin
            clientId={process.env.REACT_APP_NAVER_CLIENT_ID || ""}
            callbackUrl={process.env.REACT_APP_NAVER_CALLBACK_URL || ""}
            onSuccess={onSuccessNaver}
            render={(props) => renderButton(props.onClick)}
            onFailure={() => console.log("error")}
          />
        )} */
/* {type === "google" && (
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
            render={(props) => renderButton(props.onClick)}
            onSuccess={onSuccessGoogle}
            onFailure={onSuccessGoogle}
            cookiePolicy={"single_host_origin"}
          />
        )} */
