import React from "react";
import styled from "../Styles/index";
import { Container } from "@material-ui/core";
import { Plus, Shuffle, Profile } from "../Icons";
import useInput from "../Hooks/useInput";
import Input from "../Components/Input";
import { useHistory, Link } from "react-router-dom";

const ContainerWrapper = styled.div`
  width: 100%;
  top: 0px;
  background-color: ${(props) => props.theme.darkBleuColor};
  position: fixed;
  color: white;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
`;

const Title = styled(Link)`
  font-size: 24px;
  font-weight: 600;
  padding-right: 16px;
  color: inherit;
`;

const MenuItems = styled.div`
  display: flex;
  align-items: center;
  margin: 8px;
`;

const MenuItem = styled.div`
  :not(:last-child) {
    padding-right: 32px;
  }
`;

const SearchBox = styled.div`
  width: 100%;
  input {
    width: 100%;
  }
  padding-right: 8px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${(props) => props.theme.blueColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  :not(:last-child) {
    margin-right: 8px;
  }
`;

export default () => {
  const search = useInput("");
  const history = useHistory();

  return (
    <ContainerWrapper>
      <Container maxWidth="md">
        <ContentWrapper>
          <Row>
            <Title to="/">JJeoris</Title>
            <MenuItems>
              <MenuItem>Browse</MenuItem>
              <MenuItem>Categories</MenuItem>
              <MenuItem>Vote</MenuItem>
              <MenuItem>Store</MenuItem>
            </MenuItems>
          </Row>
          <Row>
            <SearchBox>
              <Input
                value={search.value}
                placeholder={"Type any words"}
                onChange={search.onChange}
              />
            </SearchBox>
            <Icons>
              <Icon>
                <Plus size={16} />
              </Icon>
              <Icon>
                <Shuffle size={20} />
              </Icon>
              <Icon onClick={() => history.push("signin")}>
                <Profile size={16} />
              </Icon>
            </Icons>
          </Row>
        </ContentWrapper>
      </Container>
    </ContainerWrapper>
  );
};
