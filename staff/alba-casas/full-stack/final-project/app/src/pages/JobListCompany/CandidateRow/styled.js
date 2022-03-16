import styled from "styled-components";
import Box from "../../../components/Box";

export const StyledCandidateRow = styled(Box)`
  height: 96px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 16px 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
