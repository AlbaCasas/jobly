import { Navigate } from "react-router-dom";
import Nav from "../../components/Nav";
import { View } from "./styled";

const Board = () => {
  let tokenValid = !!sessionStorage.token;

  return !tokenValid ? (
    <Navigate to="/login" />
  ) : (
    <View>
      <Nav>Jobly</Nav>
    </View>
  );
};

export default Board;
