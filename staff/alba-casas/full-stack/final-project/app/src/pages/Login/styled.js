import styled from "styled-components";
import Box from "../../components/Box";
import Button from "../../components/Button";

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const View = styled(Box)`
  display: block;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    height: 100vh;
  }
`;

export const LeftSection = styled(Box)`
  display: none;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    width: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const RightSection = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 72px 24px;
  gap: 32px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 50%;
    padding: 180px 72px 32px 72px;
  }
`;
