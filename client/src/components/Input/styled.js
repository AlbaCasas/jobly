import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  padding: 24px 12px 24px 12px;
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  color: ${({ theme }) => theme.colors.text};
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  &:active,
  :focus {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;
