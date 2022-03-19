import styled, { css } from "styled-components";

const disabledCss = css`
  background-color: ${({ theme }) => theme.colors.gray};
  cursor: initial;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};
  }
`;

export const StyledButton = styled.button`
  display: flex;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  min-width: 140px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  transition: all ease-in 0.1s;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
  ${({ disabled }) => {
    if (disabled) return disabledCss;
  }}
`;
