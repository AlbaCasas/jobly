import styled from "styled-components";
import Box from "../../../components/Box";
import Button from "../../../components/Button";

export const ContainerModal = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: center;
    margin-top: 0px;
    height: fit-content;
  }
`;

export const ContainerText = styled.div`
  flex-direction: column;
  display: flex;
  gap: 24px;
  align-items: center;
  margin-bottom: 24px;
`;

export const ButtonFile = styled(Button)`
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const ButtonSend = styled(Button)`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 200px;
  }
`;
