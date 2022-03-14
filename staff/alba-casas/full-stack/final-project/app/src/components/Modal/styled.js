import styled from "styled-components";
import Box from "../Box";

export const StyledModal = styled(Box)`
  width: 800px;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 10;
  top: 20%;
  align-self: center;
  padding: 48px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const View = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 10;
  width: 100vw;
  height: 100vh;
  position: absolute;
  padding: 24px;
`;
