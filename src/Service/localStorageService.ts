const TOKEN_KEY = "TOKEN_KEY";

export const getAccessToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setAccessToken = (token: string) => {
  return localStorage.setItem(TOKEN_KEY, token);
};
