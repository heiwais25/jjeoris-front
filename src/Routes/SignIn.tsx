import React from "react";
import styled from "../Styles/index";
import { Link, useHistory } from "react-router-dom";
import { ISuccessArgs } from "../Components/SignInButton/SignInButton";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../Slices/auth";
import { authSelector } from "../Slices";
import { toast } from "react-toastify";
import NaverSignInButton from "../Components/SignInButton/NaverSignInButton";
import KakaoSignInButton from "../Components/SignInButton/KakaoSignInButton";
import GoogleSignInButton from "../Components/SignInButton/GoogleSignInButton";
import { useEffect, useCallback } from "react";

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

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { isSignedIn } = useSelector(authSelector);

  const onSuccessRouting = useCallback(() => history.push("/"), [history]);

  // TODO : Routing에서 아예 현재 Routing에 접근하지 못하도록 할 수 있는가?
  useEffect(() => {
    // User Already Login and Get Access Token
    if (isSignedIn) {
      onSuccessRouting();
    }
  }, [isSignedIn, onSuccessRouting]);

  const onSuccess = ({ name, email }: ISuccessArgs) => {
    console.log(name, email);
    dispatch(signIn(name, email, onSuccessRouting));
  };

  const onFailure = () => {
    toast.error("로그인을 실패햇습니다.");
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
              <NaverSignInButton onSuccess={onSuccess} onFailure={onFailure} />
            </ButtonBox>
            <ButtonBox>
              <KakaoSignInButton onSuccess={onSuccess} onFailure={onFailure} />
            </ButtonBox>
            <ButtonBox>
              <GoogleSignInButton onSuccess={onSuccess} onFailure={onFailure} />
            </ButtonBox>
          </Buttons>
        </Row>
      </FormBox>
    </Container>
  );
};
