import React from "react";
import SignInButton, { ISuccessArgs } from "./SignInButton";
import { GoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from "react-google-login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

type IProps = {
  bgColor?: string;
  color?: string;
  text?: string;
  icon?: JSX.Element;
  onSuccess: (args: ISuccessArgs) => void;
  onFailure: () => void;
};

export default ({
  bgColor = "#4081ED",
  color = "white",
  text = "구글로 로그인",
  icon = <FontAwesomeIcon icon={faGoogle} />,
  onSuccess,
  onFailure,
}: IProps) => {
  const onSuccessGoogle = (origResponse: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    let response = (origResponse as unknown) as GoogleLoginResponse;
    // Get id, name
    onSuccess({
      name: response.getBasicProfile().getName(),
      email: response.getBasicProfile().getEmail(),
    });
  };

  return (
    <GoogleLogin
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
      render={(props) => (
        <SignInButton
          bgColor={bgColor}
          color={color}
          text={text}
          icon={icon}
          onClick={props.onClick}
        />
      )}
      onSuccess={onSuccessGoogle}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
};
