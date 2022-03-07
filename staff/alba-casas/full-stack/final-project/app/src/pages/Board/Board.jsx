import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { retrieveUser } from "../../api";

import Card from "../../components/Card";
import DropDown from "../../components/DropDown/DropDown";
import Nav from "../../components/Nav";
import Search from "../../components/Search";
import { Section, StyledContainer, View } from "./styled";

const Board = () => {
  const [isShownDropDown, setIsShownDropDown] = useState(false);
  const [name, setName] = useState();
  const [role, setRole] = useState();

  useEffect(() => {
    try {
      retrieveUser(sessionStorage.token).then((user) => {
        setName(user.name);
        setRole(user.role);
      });
    } catch (error) {
      alert(error.message);
    }
  });

  const showDropDown = () => {
    setIsShownDropDown(!isShownDropDown);
  };

  let tokenValid = !!sessionStorage.token;

  return !tokenValid ? (
    <Navigate to="/login" />
  ) : (
    <View>
      <Nav name={name} role={role} showDropDown={showDropDown}>
        Jobly
      </Nav>
      <DropDown isShownDropDown={isShownDropDown}>Profile</DropDown>
      <Section>
        <Search role={role} />
        <StyledContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </StyledContainer>
      </Section>
    </View>
  );
};

export default Board;
