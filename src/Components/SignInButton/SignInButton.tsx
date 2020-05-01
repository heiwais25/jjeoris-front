import React from "react";
import styled from "../../Styles";
import NaverLogin, { NaverUser } from "react-naver-login";
import {
  GoogleLogin,
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Naver, Kakao } from "../../Icons";
import KakaoLogin from "react-kakao-login";
import { KakaoLoginResponseV2 } from "react-kakao-login/dist/types";

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
  type: OAuthType;
  onSuccess: (args: ISuccessArgs) => void;
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

export default ({ type, onSuccess }: IProps) => {
  const onSuccessNaver = (res: NaverUser) => {
    onSuccess({ name: res.name, email: res.email });
  };

  const onSuccessGoogle = (
    origResponse: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    let response = (origResponse as unknown) as GoogleLoginResponse;
    // Get id, name
    onSuccess({
      name: response.getBasicProfile().getName(),
      email: response.getBasicProfile().getEmail(),
    });
  };

  const onSuccessKakao = (origResponse: KakaoLoginResponseV2) => {
    // TODO : Kakao Require Buisness Setting
    console.log(origResponse.profile.kakao_account.email);
  };

  const renderButton = (onClick: () => void) => (
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

  return (
    <Container>
      {type === "kakao" && (
        <KakaoLogin
          jsKey={process.env.REACT_APP_KAKAO_CLIENT_ID || ""}
          onSuccess={onSuccessKakao}
          onFailure={(result) => console.log(result)}
          getProfile={true}
          throughTalk={true}
          render={(props) => renderButton(props.onClick)}
        />
      )}
      {type === "naver" && (
        <NaverLogin
          clientId={process.env.REACT_APP_NAVER_CLIENT_ID || ""}
          callbackUrl={process.env.REACT_APP_NAVER_CALLBACK_URL || ""}
          onSuccess={onSuccessNaver}
          render={(props) => renderButton(props.onClick)}
          onFailure={() => console.log("error")}
        />
      )}
      {type === "google" && (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
          render={(props) => renderButton(props.onClick)}
          onSuccess={onSuccessGoogle}
          onFailure={onSuccessGoogle}
          cookiePolicy={"single_host_origin"}
        />
      )}
    </Container>
  );
};
