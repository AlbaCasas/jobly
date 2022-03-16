import styled from "styled-components";

export const StyledModal = styled.form`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  align-self: center;
  padding: 0px 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 120px;
  gap: 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 800px;
    margin-top: 0px;
    padding: 40px;
    height: fit-content;
    z-index: 10;
    top: 20%;
    background-color: ${({ theme }) => theme.colors.white};
  }
`;

export const View = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    background-color: rgba(0, 0, 0, 0.25);
    z-index: 10;
    width: 100vw;
    height: 100vh;
    position: absolute;
  }
`;
