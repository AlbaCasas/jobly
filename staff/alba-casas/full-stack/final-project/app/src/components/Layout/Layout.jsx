import { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { retrieveUser } from "../../api";
import Dropdown from "../Dropdown/Dropdown";
import Nav from "../Nav";

import { StyledLogo, View } from "./styled";

const Layout = ({ children }) => {
  let tokenValid = !!sessionStorage.token;
  const [isDropdownShown, setIsDropdownShown] = useState(false);
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const goToBoard = () => {
    navigate("board");
  };

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
        setUser(user);
      });
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return !tokenValid ? (
    <Navigate to="/login" />
  ) : (
    <View>
      <Nav
        name={user.name}
        avatar={user.avatar}
        role={user.role}
        showDropdown={showDropdown}
      >
        <StyledLogo onClick={goToBoard}>Jobly</StyledLogo>
      </Nav>
      <Dropdown
        role={user.role}
        closeDropdown={closeDropdown}
        isShown={isDropdownShown}
      >
        Profile
      </Dropdown>
      {children}
    </View>
  );
};

export default Layout;
