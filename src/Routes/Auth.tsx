import React, { useEffect } from "react";
import styled from "../Styles/index";
import useInput from "../Hooks/useInput";
import { Button, TextField } from "@material-ui/core";
import FacebookLogin, { ReactFacebookLoginInfo } from "react-facebook-login";
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import KakaoLogin from "react-kakao-login";
import NaverLogin from "../Components/NaverLogin";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import { NaverUser } from "../Components/NaverLogin";
import Input from "../Components/Input";

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
  width: 400px;
  padding: 8px;
`;

const Buttons = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding-bottom: 8px;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
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
  const facebookOnSuccess = (res: ReactFacebookLoginInfo) => {};
  const kakaoOnSuccess = (res: any) => {
    console.log(res);
  };
  const naverOnSuccess = (user: NaverUser) => {
    console.log(user.email);
  };

  const email = useInput("");
  const password = useInput("");
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
            <Text>Start leading a word trends</Text>
          </DescriptionBox>
        </Row>
        <Row>
          <TextField
            value={email.value}
            onChange={(e) => email.setValue(e.currentTarget.value)}
            placeholder="Email"
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
          />
        </Row>
        <Row>
          <TextField
            value={password.value}
            onChange={(e) => password.setValue(e.currentTarget.value)}
            placeholder="Password"
            type="password"
            label="password"
            variant="outlined"
            fullWidth
          />
        </Row>
        <Row>
          <Button fullWidth variant="contained" color="primary">
            Sign In
          </Button>
        </Row>
        <Row>
          <LinkSplitter>
            <LinkSplitterText>Or Sign In With</LinkSplitterText>
          </LinkSplitter>
        </Row>
        <Row>
          <Buttons>
            <ButtonBox>
              <NaverLogin
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
              <NaverLogin
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
          </Buttons>
        </Row>
        {/* <Row>
          <KakaoLogin jsKey="kakao-js-key" onSuccess={kakaoOnSuccess} onFailure={kakaoOnSuccess} />
        </Row>
        <Row>
          <GoogleLogin clientId="123" onSuccess={googleOnSuccess} onFailure={googleOnSuccess} />
        </Row>
        <Row>
          <FacebookLogin appId="123" callback={facebookOnSuccess} />
        </Row> */}
      </FormBox>
    </Container>
  );
};
