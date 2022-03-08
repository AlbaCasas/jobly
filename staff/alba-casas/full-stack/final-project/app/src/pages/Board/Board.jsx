import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { retrieveUser } from "../../api";
import Card from "../../components/Card";
import Dropdown from "../../components/Dropdown/Dropdown";
import Nav from "../../components/Nav";
import Search from "../../components/Search";
import { Section, StyledContainer, View } from "./styled";

const Board = () => {
  let tokenValid = !!sessionStorage.token;
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const[name, setName] = useState();
  const [role, setRole] = useState();

  const showDropdown = () => {
    setIsDropdownShown(!isDropdownShown);
  };

  const closeDropdown = () => {
    if (isDropdownShown) {
      setIsDropdownShown(false);
    }
  };

  useEffect(() => {
    try {
      retrieveUser(sessionStorage.token).then((user) => {
        setName(user.name);
        setRole(user.role);
      });
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return !tokenValid ? (
    <Navigate to="/login" />
  ) : (
    <View>
      <Nav name={name} role={role} showDropdown={showDropdown}>
        Jobly
      </Nav>
      <Dropdown closeDropdown={closeDropdown} isShown={isDropdownShown}>
        Profile
      </Dropdown>
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
