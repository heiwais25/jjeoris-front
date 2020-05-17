import { useEffect, useState, useCallback } from "react";

declare global {
  interface Window {
    Kakao: {
      init: (key: string) => void;
      isInitialized: () => boolean;
      Auth: {
        authorize: (option: {
          redirectUri: string;
          state?: string;
          throughTalk?: boolean;
          scope?: string;
        }) => void;
        cleanup: () => void;
        createLoginButton: (options: {
          container?: string | HTMLElement;
          lang?: "kr" | "en";
          success?: () => void;
          fail?: () => void;
          always?: () => void;
          persistAccessToken?: boolean;
          persistRefreshToken?: boolean;
          scope?: string;
        }) => void;
        login: (option: {
          success?: () => void;
          fail?: () => void;
          always?: () => void;
          persistAccessToken?: boolean;
          persistRefreshToken?: boolean;
          throughTalk?: boolean;
          scope: string;
        }) => void;
        logout: (cb?: () => void) => void;
        getStatusInfo: (cb?: () => void) => void;
      };
      API: {
        request: (option: {
          url: string;
          data?: Object;
          success?: (response: string) => void;
          fail?: (response: string) => void;
          always?: () => void;
        }) => void;
      };
    };
  }
}

export default () => {
  const [initialized, setInitialized] = useState(false);
  const { Kakao } = window;

  useEffect(() => {
    if (!initialized) {
      if (!Kakao.isInitialized()) {
        Kakao.init(process.env.REACT_APP_KAKAO_CLIENT_ID || "");
      }
      setInitialized(true);
    }
  }, [initialized]);

  const signIn = useCallback(() => {
    if (initialized) {
      Kakao.Auth.authorize({
        redirectUri: "http://localhost:3000/auth/signin/kakao",
      });
    }
  }, [initialized]);

  const signOut = useCallback(
    (cb?: () => void) => {
      if (initialized) {
        Kakao.Auth.logout(cb);
      }
    },
    [initialized]
  );

  return { initialized, signIn, signOut };
};
