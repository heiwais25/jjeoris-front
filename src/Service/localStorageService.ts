const TOKEN_KEY = "AUTH_TOKEN";

export type ITokenProvider = "kakao" | "google" | "naver";

const getProviderTokenKey = (provider: ITokenProvider) => {
  return `TOKEN_KEY_${provider.toUpperCase()}`;
};

export const getAccessToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setAccessToken = (token: string) => {
  return localStorage.setItem(TOKEN_KEY, token);
};

export const clearAccessToken = () => {
  return localStorage.removeItem(TOKEN_KEY);
};

export const setOAtuhAccessToken = (
  provider: ITokenProvider,
  token: string
) => {
  return localStorage.setItem(getProviderTokenKey(provider), token);
};

export const clearOAtuhAccessToken = (provider: ITokenProvider) => {
  return localStorage.removeItem(getProviderTokenKey(provider));
};

export const getOAtuhAccessToken = (provider: ITokenProvider) => {
  return localStorage.getItem(getProviderTokenKey(provider));
};
