import styled from "styled-components";

export const StyledSelectSearch = styled.select`
  height: 48px;
  text-transform: capitalize;
  padding-left: 8px;
  border-radius: 0px;
  border-bottom: 1px solid #ddd;
  border-top: 1px solid ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.white};
  border-left: 1px solid ${({ theme }) => theme.colors.white};
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 1000px;
    height: 64px;
    border-right: 1px solid ${({ theme }) => theme.colors.grayLight};
    border-bottom: none;
    padding: 8px;
  }
`;
