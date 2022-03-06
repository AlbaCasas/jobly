import styled from "styled-components";
import Box from "../../components/Box";
import Button from "../../components/Button";
import Text from "../../components/Text";
import { MdArrowBack } from "react-icons/md";

export const View = styled(Box)`
  display: flex;
  height: 100vh;
  padding: 32px 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 100vh;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const RegisterForm = styled(Box)`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 520;
    justify-content: space-between;
    width: 460px;
  }
`;

export const InputsGrid = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
`;

export const SwitchContainer = styled(Box)`
  justify-content: center;
  align-items: center;
  gap: 72px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    gap: 24px;
  }
`;

export const ResponsiveText = styled(Text)`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
  }
`;

export const ArrowBack = styled(MdArrowBack)`
  font-size: 24px;
`;

export const GoBackText = styled(Text)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`;
