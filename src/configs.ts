const requiredEnvs = [
  "REACT_APP_NAVER_CLIENT_ID",
  "REACT_APP_NAVER_CALLBACK_URL",
  "REACT_APP_KAKAO_CLIENT_ID",
  "REACT_APP_KAKAO_CALLBACK_URL",
];

const checkRequiredEnvs = () => {
  if (requiredEnvs.some((val) => !process.env[val])) {
    alert("실행에 필요한 값이 없습니다.");
    throw Error("InvalidOperationOptions");
  }
};

export default {
  oauth: {
    naver: {
      clientId: process.env.REACT_APP_NAVER_CLIENT_ID || "",
      callbackURL: process.env.REACT_APP_NAVER_CALLBACK_URL || "",
    },
    kakao: {
      clientId: process.env.REACT_APP_KAKAO_CLIENT_ID || "",
      callbackURL: process.env.REACT_APP_KAKAO_CLIENT_ID || "",
    },
  },
};
