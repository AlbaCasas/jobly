import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 24px;
  flex-direction: column;
  gap: 8px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    max-width: 290px;
    gap: 16px;
  }
`;

export const ImageContainer = styled.div`
  gap: 16px;
  width: fit-content;
`;

export const ImageStyled = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
  border-radius: 5px;
`;

export const ContainerTag = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 8px;
`;
