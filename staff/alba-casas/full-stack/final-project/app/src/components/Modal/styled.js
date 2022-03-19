import { MdClose } from "react-icons/md";
import styled from "styled-components";

export const StyledModal = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  align-self: center;
  padding: 0px 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 10;
  position: relative;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    border-radius: 10px;
    width: 800px;
    margin-top: 0px;
    padding: 40px;
    height: fit-content;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const CloseIcon = styled(MdClose)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 32px;
  right: 32px;
  cursor: pointer;
  z-index: 4;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    top: 10px;
    right: 10px;
  }
`;

export const Backdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 10;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 10;
    width: 100vw;
    height: 100vh;
    position: absolute;
  }
`;
