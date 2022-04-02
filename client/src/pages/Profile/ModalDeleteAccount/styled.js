import styled from 'styled-components';
import Box from '../../../components/Box';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

export const ContainerModal = styled(Box)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: center;
    margin-top: 0px;
    height: fit-content;
    width: 400px;
    align-self: center;
  }
`;

export const ContainerText = styled.div`
  flex-direction: column;
  display: flex;
  gap: 32px;
  align-items: center;
`;

export const ModalInput = styled(Input)`
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    align-self: center;
  }
`;

export const DeleteButton = styled(Button)`
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 300px;
    align-self: center;
  }
`;
