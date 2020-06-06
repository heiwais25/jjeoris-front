import { useEffect, useState, useCallback } from "react";

export type LoginResponse = {
  kakao_account: {
    email: string;
    profile: {
      nickname: string;
    };
  };
};

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
        setAccessToken: (token: string) => void;
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
          success?: (res: any) => void;
          fail?: () => void;
          always?: () => void;
          persistAccessToken?: boolean;
          persistRefreshToken?: boolean;
          throughTalk?: boolean;
          scope?: string;
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
  }, [Kakao, initialized]);

  const signIn = useCallback(() => {
    return new Promise<LoginResponse>((res, rej) => {
      if (initialized) {
        Kakao.Auth.login({
          success: (response: any) => {
            Kakao.API.request({
              url: "/v2/user/me",
              success: (profile) => {
                console.log("Here", profile);
                res(JSON.parse(JSON.stringify(profile)) as LoginResponse);
              },
            });
          },
          scope: "account_email,profile",
        });
      }
    });
  }, [Kakao, initialized]);

  const signOut = useCallback(
    (cb?: () => void) => {
      if (initialized) {
        Kakao.Auth.logout(cb);
      }
    },
    [Kakao, initialized]
  );

  return { initialized, signIn, signOut };
};
