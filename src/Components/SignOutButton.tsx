import React from "react";
import styled from "../Styles";
import Button from "./Button";
import useKakao from "../Hooks/useKakao";
import { useDispatch } from "react-redux";
import { setSignedOut } from "../Slices/auth";

const Container = styled.div``;

export default () => {
  const { signOut } = useKakao();
  const dispatch = useDispatch();

  const handleClick = () => {
    // Get current oauth settings
    // signOut();

    // Delete token
    dispatch(setSignedOut());
  };

  return <Button text="로그아웃" onClick={handleClick} />;
};
