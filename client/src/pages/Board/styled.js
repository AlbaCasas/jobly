import styled from 'styled-components';
import Box from '../../components/Box';

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const StyledContainer = styled(Box)`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 24px;
  flex-direction: column;
  margin-top: 40px;
  flex-wrap: wrap;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;
