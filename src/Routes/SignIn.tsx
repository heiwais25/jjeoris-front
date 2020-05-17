import React, { useEffect } from "react";
import styled from "../Styles/index";
import { Link, useHistory } from "react-router-dom";
import SignInButton from "../Components/SignInButton";
import { ISuccessArgs } from "../Components/SignInButton/SignInButton";
import { useDispatch, useSelector } from "react-redux";
import { signIn } from "../Slices/auth";
import { authSelector } from "../Slices";

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
  const { isSignedIn, loading, user } = useSelector(authSelector);

  const onSuccess = ({ name, email }: ISuccessArgs) => {
    console.log(name, email);
    dispatch(signIn(name, email));
  };

  // 이미 로그인했다면 Main page로 이동

  // 새롭게 로그인한 경우 Main Page로 이동

  useEffect(() => {
    if (isSignedIn) {
      setTimeout(() => {
        history.push("/");
      }, 2000);
    }
  }, [isSignedIn]);

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
              <SignInButton type="kakao" onSuccess={onSuccess} />
            </ButtonBox>
            <ButtonBox>
              <SignInButton type="naver" onSuccess={onSuccess} />
            </ButtonBox>
            <ButtonBox>
              <SignInButton type="google" onSuccess={onSuccess} />
            </ButtonBox>
          </Buttons>
        </Row>
      </FormBox>
    </Container>
  );
};
