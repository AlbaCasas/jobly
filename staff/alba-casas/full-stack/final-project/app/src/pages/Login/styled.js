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
    justify-content: center;
    height: 100%;
    align-items: center;
  }
`;

export const RightSection = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 72px 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 50%;
    padding: 180px 72px 32px 72px;
    align-items: center;
  }
`;

export const LoginForm = styled(Box)`
  width: 100%;
  gap: 32px;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 100%;
    justify-content: space-between;
    width: 400px;
  }
`;

export const Illustration = styled.img`
  width: 290px;
  height: 265px;
`;
