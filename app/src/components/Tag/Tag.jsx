import { StyledTag } from "./styled";
import Text from "../Text";

const Tag = ({ children }) => {
  return (
    <StyledTag>
      <Text color="#2E66CC" variant="caption">
        {children}
      </Text>
    </StyledTag>
  );
};

export default Tag;
