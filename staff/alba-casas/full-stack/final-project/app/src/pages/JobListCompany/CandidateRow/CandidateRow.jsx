import { StyledCandidateRow } from "./styled";

const CandidateRow = ({ children, ...props }) => {
  return <StyledCandidateRow {...props}>{children}</StyledCandidateRow>;
};

export default CandidateRow;
