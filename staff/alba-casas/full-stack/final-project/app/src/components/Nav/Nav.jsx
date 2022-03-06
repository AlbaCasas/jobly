import { MdAccountCircle } from "react-icons/md";
import { StyledNav, StyledText, StyledTextNav } from "./styled";
import Box from "../Box";
import Text from "../Text";

const Nav = ({ children }) => {
  return (
    <StyledNav>
      <Box
        width="fit-content"
        justifyContent="space-between"
        alignItems="center"
      >
        <StyledText>{children}</StyledText>
      </Box>
      <Box width="fit-content" justifyContent="center" alignItems="center">
        <MdAccountCircle />
        <StyledTextNav>
          <Text variant="body-bold">Alba Casas</Text>
          <Text variant="caption">Candidate</Text>
        </StyledTextNav>
      </Box>
    </StyledNav>
  );
};

export default Nav;
