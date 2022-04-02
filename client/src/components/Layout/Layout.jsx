import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../DropDown';
import Nav from '../Nav';
import { StyledLogo, View, Container } from './styled';
import Context from '../../Context';

const Layout = ({ children }) => {
  const { user } = useContext(Context);
  const [isDropdownShown, setIsDropdownShown] = useState(false);

  const navigate = useNavigate();
  const goToBoard = () => {
    navigate('/board');
  };

  const showDropdown = () => {
    setIsDropdownShown(!isDropdownShown);
  };

  const closeDropdown = () => {
    if (isDropdownShown) {
      setIsDropdownShown(false);
    }
  };

  return (
    <View>
      <Nav
        name={user?.name}
        avatar={user?.avatar}
        role={user?.role}
        showDropdown={showDropdown}
      >
        <StyledLogo onClick={goToBoard}>Jobly</StyledLogo>
      </Nav>
      <Dropdown
        role={user?.role}
        closeDropdown={closeDropdown}
        isShown={isDropdownShown}
      >
        Profile
      </Dropdown>
      <Container>{children}</Container>
    </View>
  );
};

export default Layout;
