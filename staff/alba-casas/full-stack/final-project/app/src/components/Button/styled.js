import styled from "styled-components";

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
`;
