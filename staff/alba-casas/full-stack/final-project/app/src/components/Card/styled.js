import styled, { css } from "styled-components";
import Text from "../Text";

const cardBlue = css`
  background-color: ${({ theme }) => theme.colors.primary};
`;

const textDescription = css`
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledCard = styled.div`
  display: flex;
  height: fit-content;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 24px;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  ${({ isCompany }) => {
    if (isCompany) {
      return cardBlue;
    }
  }}

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
    transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
      0.3s box-shadow,
      0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
    max-width: 290px;
    gap: 16px;
    overflow: hidden;
    position: relative;
    &:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
    }
  }
`;

export const ImageContainer = styled.div`
  gap: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
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
  ${({ isCompany }) => {
    if (isCompany) {
      return textDescription;
    }
  }}
`;

export const StyledDescription = styled(Text)`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
    width: 100%;
    ${({ isCompany }) => {
      if (isCompany) {
        return textDescription;
      }
    }}
  }
`;
