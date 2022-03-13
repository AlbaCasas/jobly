import {
  StyledNav,
  StyledText,
  StyledTextNav,
  StyledTextTitle,
  StyleTextRole,
} from "./styled";
import Box from "../Box";

const Nav = ({ avatar, children, showDropdown, name, role }) => {
  return (
    <StyledNav>
      <Box
        width="fit-content"
        justifyContent="space-between"
        alignItems="center"
      >
        <StyledText>{children}</StyledText>
      </Box>
      <Box
        onClick={showDropdown}
        width="fit-content"
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
      >
        <img width="48px" src={avatar} alt="profile" />
        <StyledTextNav>
          <StyledTextTitle>{name}</StyledTextTitle>
          <StyleTextRole variant="caption">{role}</StyleTextRole>
        </StyledTextNav>
      </Box>
    </StyledNav>
  );
};

export default Nav;
