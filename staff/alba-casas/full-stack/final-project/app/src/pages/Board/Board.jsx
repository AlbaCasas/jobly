import { useState } from "react";
import { Navigate } from "react-router-dom";
import Card from "../../components/Card";
import DropDown from "../../components/DropDown/DropDown";
import Nav from "../../components/Nav";
import Search from "../../components/Search";
import { Section, StyledContainer, View } from "./styled";

const Board = () => {
  const [isShownDropDown, setIsShownDropDown] = useState(false);

  const showDropDown = () => {
    setIsShownDropDown(!isShownDropDown);
  };

  let tokenValid = !!sessionStorage.token;

  return !tokenValid ? (
    <Navigate to="/login" />
  ) : (
    <View>
      <Nav showDropDown={showDropDown}>Jobly</Nav>
      <DropDown isShownDropDown={isShownDropDown}>Profile</DropDown>
      <Section>
        <Search />
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
