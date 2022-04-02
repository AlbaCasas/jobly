import styled from "styled-components";
import Box from "../Box";

export const View = styled(Box)`
  height: auto;
  display: flex;
  justify-content: center;
`;

export const StyledLogo = styled.div`
  cursor: pointer;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 144px 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 920px;
    padding: 144px 0px;
  }
`;
