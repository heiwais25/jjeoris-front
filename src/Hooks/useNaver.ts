import { useEffect, useCallback, useState } from "react";

export interface INaverUser {
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
  onSuccess: (result: INaverUser) => void;
  onFailure: () => void;
  size?: number;
  isPopup?: boolean;
}

type NaverLogin = {
  accessToken: {
    accessToken: string;
    expires: number;
    ttl: number;
  };
  clientId: string;
  init: () => void;
  popup: () => void;
  oauthCallback: () => void;
  generateAuthorizeUrl: () => string;
  getLoginStatus: (status: any) => void;
  user: INaverUser;
};

type INaver = {
  LoginWithNaverId: {
    new (option: {
      callbackUrl: string;
      clientId: string;
      isPopup?: boolean;
      callbackHandle?: boolean;
      loginButton: { color: string; type: number; height: number };
      svctype?: number;
    }): NaverLogin;
  };
  successCallback: (data: INaverUser) => void;
  failureCallback: () => void;
};

declare global {
  interface Window {
    naver: INaver;
  }
}

export const NAVER_DEFAULT_BUTTON_ID = "naverIdLogin";

// This hook requires default div element in the document.
// It is due to original implementation of the naver login..

export default ({ isPopup = false, clientId, callbackUrl, onSuccess, onFailure }: IProps) => {
  const [naverLogin, setNaverLogin] = useState<NaverLogin>();

  const signIn = useCallback(() => {
    // Check first
    naverLogin?.getLoginStatus((status: any) => {
      if (status) {
        onSuccess(naverLogin.user);
      } else {
        let baseElement = document.getElementById(NAVER_DEFAULT_BUTTON_ID);
        if (baseElement) {
          // Click
          (baseElement.firstChild as HTMLDivElement).click();
        } else {
          console.error(`There is no default element with id ${NAVER_DEFAULT_BUTTON_ID}`);
          onFailure();
        }
      }
    });
  }, [naverLogin, onSuccess, onFailure]);

  // Initialize
  useEffect(() => {
    // Add login button
    if (document) {
      // Add inivisible naver id login button
      let baseElement = document.getElementById(NAVER_DEFAULT_BUTTON_ID);
      if (baseElement) {
        const naverLogin = new window.naver.LoginWithNaverId({
          clientId,
          callbackUrl,
          isPopup,
          loginButton: { color: "green", type: 3, height: 60 },
        });
        // Initialize
        naverLogin.init();
        console.log(naverLogin);
        baseElement.style.display = "none";
        setNaverLogin(naverLogin);
      }
    }
  }, [isPopup, callbackUrl, clientId]);

  return { signIn };
};
