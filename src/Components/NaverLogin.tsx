import React, { useRef } from "react";
import styled from "../Styles";

const NAVER_ID_SDK_URL = "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.0.js";
export interface NaverUser {
  email: string;
  name: string;
  id: string;
  profile_image: string;
  age?: string;
  birthday?: string;
  gender?: string;
  nickname?: string;
}

interface IProps {
  clientId: string;
  callbackUrl: string;
  onSuccess: (result: NaverUser) => void;
  onFailure: () => void;
  size?: number;
}

type INaver = {
  LoginWithNaverId: {
    new (option: {
      callbackUrl: string;
      clientId: string;
      isPopup?: boolean;
      callbackHandle?: boolean;
      loginButton: { color: string; type: number; height: number };
      svctype?: number;
    }): {
      init: () => void;
      popup: () => void;
      oauthCallback: () => void;
      generateAuthorizeUrl: () => string;
      getLoginStatus: (status: any) => void;
      user: NaverUser;
    };
  };
  successCallback: (data: NaverUser) => void;
  failureCallback: () => void;
};

declare global {
  interface Window {
    naver: INaver;
  }
}

/**
 * 이 함수는 브라우저 환경에서만 호출이 되야 한다. window 객체에 직접 접근한다.
 * @param props
 */
const initLoginButton = (props: IProps) => {
  if (!("browser" in process)) {
    return;
  }
  const { clientId, callbackUrl, onSuccess, onFailure } = props;
  const naver = window["naver"];

  const naverLogin = new naver.LoginWithNaverId({
    callbackUrl,
    clientId,
    isPopup: false,
    loginButton: { color: "green", type: 1, height: 40 },
    callbackHandle: true,
  });

  naverLogin.init();

  naver.successCallback = (data: NaverUser) => onSuccess(data);
  naver.failureCallback = onFailure;
  naverLogin.getLoginStatus((status: any) => {
    if (status) {
      naver.successCallback(naverLogin.user);
    } else {
      naver.failureCallback();
    }
  });
};

const loadScript = (props: IProps) => {
  if (document && document.querySelectorAll("#naver-login-sdk").length === 0) {
    const script = document.createElement("script");
    script.id = "naver-login-sdk";
    script.src = NAVER_ID_SDK_URL;
    script.onload = () => initLoginButton(props);
    document.head.appendChild(script);
    console.log(window.naver);
  }
};

const NaverImageURL = "https://static.nid.naver.com/oauth/button_g.PNG?version=js-2.0.0";

const Container = styled.div``;

type IconProps = {
  "data-size"?: number;
};

const Icon = styled.div<IconProps>`
  background-image: url(${NaverImageURL});
  background-size: cover;
  width: ${(props) => (props["data-size"] ? `${props["data-size"]}px` : "40px")};
  height: ${(props) => (props["data-size"] ? `${props["data-size"]}px` : "40px")};
  border-radius: 50%;
  cursor: pointer;
`;

const NaverFake = styled.div`
  display: none;
`;

export default (props: IProps) => {
  React.useEffect(() => {
    loadScript(props);
  }, []);

  const ref = useRef<HTMLDivElement>(null);

  const onClick = () => {
    (ref.current?.firstChild as HTMLDivElement).click();
  };

  return (
    <Container>
      <Icon onClick={onClick} data-size={props.size} />
      <NaverFake ref={ref} id="naverIdLogin">
        12313
      </NaverFake>
    </Container>
  );
};
