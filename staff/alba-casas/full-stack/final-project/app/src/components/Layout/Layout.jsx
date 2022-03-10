import { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { retrieveUser } from "../../api";
import Dropdown from "../Dropdown/Dropdown";
import Nav from "../Nav";

import { StyledLogo, View } from "./styled";

const Layout = ({ children }) => {
  let tokenValid = !!sessionStorage.token;
  const [isDropdownShown, setIsDropdownShown] = useState(false);

  const [name, setName] = useState();
  const [role, setRole] = useState();
  const [avatar, setAvatar] = useState();

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
        setName(user.name);
        setRole(user.role);
        setAvatar(user.avatar);
      });
    } catch (error) {
      alert(error.message);
    }
  }, []);

  return !tokenValid ? (
    <Navigate to="/login" />
  ) : (
    <View>
      <Nav name={name} avatar={avatar} role={role} showDropdown={showDropdown}>
        <StyledLogo onClick={goToBoard}>Jobly</StyledLogo>
      </Nav>
      <Dropdown
        role={role}
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
