import React from "react";
import styled from "../Styles/index";
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import NaverLogin from "../Components/NaverLogin";
import KakaoLogin from "../Components/KakaoLogin";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { NaverUser } from "../Components/NaverLogin";
import Input from "../Components/Input";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import LoginButton from "../Components/LoginButton";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.primaryColor};
`;

const Row = styled.div`
  :not(:last-child) {
    padding-bottom: 8px;
  }
  input {
    width: 100%;
    font-size: 14px;
  }
  img {
    border-radius: 50%;
  }
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 8px;
`;

const Title = styled(Link)`
  font-size: 26px;
  font-weight: 600;
  text-align: center;
`;

const DescriptionBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 16px 0px;
`;

const Text = styled.span``;

const FormBox = styled.form`
  ${(props) => props.theme.whiteBox};
  width: 300px;
  padding: 8px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  :not(:last-child) {
    padding-bottom: 8px;
  }
`;

const LinkSplitter = styled.div`
  width: 100%;
  text-align: center;
  border-bottom: 1px solid ${(props) => props.theme.greyColor};
  line-height: 0.1em;
  margin: 10px 0 20px;
`;

const LinkSplitterText = styled.span`
  background: #fff;
  padding: 0 10px;
  color: ${(props) => props.theme.greyColor};
`;

const Kakao = styled.div``;

const Form = styled.div``;

const ActionBox = styled.div``;

export default () => {
  const location = useLocation();
  const googleOnSuccess = (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {};
  const kakaoOnSuccess = (res: any) => {
    console.log(res);
  };
  const naverOnSuccess = (user: NaverUser) => {
    console.log(user.email);
  };

  const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    console.log(response);
  };

  return (
    <Container>
      <FormBox>
        <Row>
          <TitleBox>
            <Title to="/">JJeoris</Title>
          </TitleBox>
        </Row>
        <Row>
          <DescriptionBox>
            <Text>너도 인싸가 될 수 있어</Text>
          </DescriptionBox>
        </Row>
        <Row>
          <Buttons>
            <ButtonBox>
              <KakaoLogin
                clientId={process.env.REACT_APP_NAVER_CLIENT_ID || ""}
                callbackUrl={process.env.REACT_APP_NAVER_CALLBACK_URL || ""}
                onSuccess={naverOnSuccess}
                onFailure={() => console.log("error")}
              />
            </ButtonBox>
            <ButtonBox>
              <NaverLogin
                clientId={process.env.REACT_APP_NAVER_CLIENT_ID || ""}
                callbackUrl={process.env.REACT_APP_NAVER_CALLBACK_URL || ""}
                onSuccess={naverOnSuccess}
                onFailure={() => console.log("error")}
              />
            </ButtonBox>
            <ButtonBox>
              <GoogleLogin
                clientId="60270099803-fj5h3c34e2lq15jsl08ce1aecpc9c3tb.apps.googleusercontent.com"
                render={(renderProps) => (
                  <LoginButton
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    bgColor={"#4081ED"}
                    icon={faGoogle}
                    text={"구글로 로그인"}
                  />
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              />
            </ButtonBox>
          </Buttons>
        </Row>
      </FormBox>
    </Container>
  );
};
