import styled from "styled-components";
import Input from "../Input";
import Button from "../Button";

export const StyledSearch = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    width: 920px;
  }
`;

export const StyledInputSearch = styled(Input)`
  border-radius: 0px;
  border-top: 1px solid ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.white};
  border-left: 1px solid ${({ theme }) => theme.colors.white};
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 64px;
    border-radius: 0px;
    border-right: 1px solid ${({ theme }) => theme.colors.grayLight};
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    border-bottom: none;
  }
`;

export const StyledButtonSearch = styled(Button)`
  border-radius: 0px 0px 10px 10px;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 64px;
    border-radius: 0px 10px 10px 0px;
  }
`;

export const StyledInputSearchBorder = styled(Input)`
  border-radius: 10px 10px 0px 0px;
  border-top: 1px solid ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.white};
  border-left: 1px solid ${({ theme }) => theme.colors.white};
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 64px;
    border-radius: 10px 0px 0px 10px;
    border-bottom: none;
    border-right: 1px solid ${({ theme }) => theme.colors.grayLight};
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
  }
`;
