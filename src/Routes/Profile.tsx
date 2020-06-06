import React from "react";
import styled from "../Styles";
import { useSelector } from "react-redux";
import { authSelector } from "../Slices/index";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const Container = styled.div``;

export default () => {
  const history = useHistory();
  const { isSignedIn } = useSelector(authSelector);

  useEffect(() => {
    if (!isSignedIn) {
      toast.error("로그인이 필요합니다.");
      setTimeout(() => history.push("/"), 1000);
    }
  }, [isSignedIn, history]);

  return <Container>Profile</Container>;
};
