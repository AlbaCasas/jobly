import { Navigate } from "react-router-dom";
import Box from "../../components/Box";
import Card from "../../components/Card";
import Nav from "../../components/Nav";
import Search from "../../components/Search";
import { Section, StyledContainer, View } from "./styled";

const Board = () => {
  let tokenValid = !!sessionStorage.token;

  return !tokenValid ? (
    <Navigate to="/login" />
  ) : (
    <View>
      <Nav>Jobly</Nav>
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
