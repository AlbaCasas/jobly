import { Navigate } from "react-router-dom";
import Nav from "../../components/Nav";
import Search from "../../components/Search";
import { Section, View } from "./styled";

const Board = () => {
  let tokenValid = !!sessionStorage.token;

  return !tokenValid ? (
    <Navigate to="/login" />
  ) : (
    <View>
      <Nav>Jobly</Nav>
      <Section>
        <Search />
      </Section>
    </View>
  );
};

export default Board;
