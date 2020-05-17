import React from "react";
import styled from "../../Styles/index";
import useKakao from "../../Hooks/useKakao";

const Container = styled.div``;

const KakaoSingInButton = () => {
  const { signIn } = useKakao();

  return (
    <>
      <Container onClick={signIn}>KakaoLogin</Container>
    </>
  );
};

export default KakaoSingInButton;
