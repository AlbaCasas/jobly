import styled from "styled-components";
import Box from "../../components/Box";
import Button from "../../components/Button";
import Text from "../../components/Text";
import { MdArrowBack } from "react-icons/md";
import Select from "../../components/Select";

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

export const RegisterWrapper = styled(Box)`
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`;

export const TopWrapper = styled(Box)`
  margin: 32px 0px 48px 0px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 0;
  }
`;

export const StyledSelect = styled(Select)`
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  border-radius: 5px;
  padding: 8px 12px;
  height: 48px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
    height: 48px;
  }
`;
