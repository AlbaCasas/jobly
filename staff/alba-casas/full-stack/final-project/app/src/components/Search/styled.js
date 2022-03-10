import styled from "styled-components";
import Input from "../Input";
import Button from "../Button";

export const StyledSearch = styled.div`
  overflow: hidden;
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
`;

export const SearchForm = styled.form`
  width: 100%;
  height: auto;
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
    border-right: 1px solid ${({ theme }) => theme.colors.grayLight};
    border-bottom: none;
  }
`;

export const StyledButtonSearch = styled(Button)`
  border-radius: 0px 0px 0px 0px;
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 64px;
  }
`;

export const StyledInputSearchBorder = styled(Input)`
  border-radius: 0px;
  border-top: 1px solid ${({ theme }) => theme.colors.white};
  border-right: 1px solid ${({ theme }) => theme.colors.white};
  border-left: 1px solid ${({ theme }) => theme.colors.white};
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 64px;
    border-bottom: none;
    border-right: 1px solid ${({ theme }) => theme.colors.grayLight};
  }
`;
export const StyledJobSearch = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    background-color: ${({ theme }) => theme.colors.white};
    display: block;
    width: 100%;
    height: 72px;
    border-top: 1px solid ${({ theme }) => theme.colors.grayLight};
  }
`;

export const Checkbox = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;
  padding: 24px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const CheckboxStyled = styled.input`
  width: 18px;
  height: 18px;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.primary}; ;
`;
