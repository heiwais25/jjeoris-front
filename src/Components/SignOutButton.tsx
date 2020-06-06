import React from "react";
import styled from "../Styles";
import Button from "./Button";
import useKakao from "../Hooks/useKakao";
import { useDispatch } from "react-redux";
import { setSignedOut } from "../Slices/auth";

export default () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    // Get current oauth settings
    // signOut();

    // Delete token
    dispatch(setSignedOut());
  };

  return <Button text="로그아웃" onClick={handleClick} />;
};
