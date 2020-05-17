import React from "react";
import useInput from "../../Hooks/useInput";
import { useHistory, Link } from "react-router-dom";
import { ROUTE_PATH } from "../../constants";
import HeaderPresenter from "./HeaderPresenter";
import { useSelector } from "react-redux";
import { authSelector } from "../../Slices";

export default () => {
  const { isSignedIn, loading, user } = useSelector(authSelector);
  const search = useInput("");
  const history = useHistory();
  const [
    profilePopOverAnchor,
    setProfilePopOverAnchor,
  ] = React.useState<HTMLDivElement | null>(null);
  const openProfilePopOver = (event: React.MouseEvent<HTMLDivElement>) => {
    setProfilePopOverAnchor(event.currentTarget);
  };

  const closeProfilePopOver = () => {
    setProfilePopOverAnchor(null);
  };

  const moveToSignIn = () => {
    history.push(ROUTE_PATH.SIGN_IN);
  };

  const signOut = () => {};

  return (
    <>
      <HeaderPresenter
        search={search}
        signOut={signOut}
        moveToSignIn={moveToSignIn}
        openProfilePopOver={openProfilePopOver}
        closeProfilePopOver={closeProfilePopOver}
        profilePopOverAnchor={profilePopOverAnchor}
        isSignedIn={isSignedIn}
      />
    </>
  );
};
