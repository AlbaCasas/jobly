import styled from 'styled-components';

export const StyledTag = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  padding: 4px 16px;
  border-radius: 5px;
  text-transform: capitalize;
`;
