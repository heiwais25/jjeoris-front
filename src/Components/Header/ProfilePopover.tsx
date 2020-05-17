import React from "react";
import { Popover } from "@material-ui/core";
import Button from "../Button";
import { IInput } from "../../Hooks/useInput";
import styled from "../../Styles";
import { Profile } from "../../Icons";
import SignOutButton from "../SignOutButton";

type IProps = {
  signOut: () => void;
  closeProfilePopOver: () => void;
  profilePopOverAnchor: HTMLDivElement | null;
};

const Container = styled.div`
  width: 120px;
`;

const Wrapper = styled.div`
  padding: 8px;
`;

const DescriptionContainer = styled.div``;

const DescriptionRow = styled.div`
  display: flex;
  height: 30px;
  align-items: center;
  width: 100%;
  border-bottom: 1 solid ${(props) => props.theme.lightGreyColor};
  cursor: pointer;
`;

const Row = styled.div`
  button {
    width: 100%;
  }
  display: flex;
  justify-content: center;
  :not(:last-child) {
    padding-bottom: 8px;
  }
`;

const Text = styled.span`
  text-align: center;
`;

export default ({
  profilePopOverAnchor,
  closeProfilePopOver,
  signOut,
}: IProps) => {
  const open = Boolean(profilePopOverAnchor);
  const id = open ? "simple-popover" : undefined;
  return (
    <Popover
      disableScrollLock
      id={id}
      open={open}
      anchorEl={profilePopOverAnchor}
      onClose={closeProfilePopOver}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <Container>
        <Wrapper>
          <Row>
            <DescriptionContainer>
              <DescriptionRow>
                <Text>활동기록</Text>
              </DescriptionRow>
              <DescriptionRow>
                <Text>즐겨찾기</Text>
              </DescriptionRow>
              <DescriptionRow>
                <Text>정보수정</Text>
              </DescriptionRow>
            </DescriptionContainer>
          </Row>
          <Row>
            <SignOutButton />
          </Row>
        </Wrapper>
      </Container>
    </Popover>
  );
};
