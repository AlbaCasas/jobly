import styled from 'styled-components';
import Box from '../../components/Box';
import Button from '../../components/Button';
import Text from '../../components/Text';
import HeadingCard from './HeadingCard/HeadingCard';

export const Heading = styled(Box)`
  display: flex;
  height: 88px;
  overflow: hidden;
  border-radius: 10px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const StyledJobHeadingCard = styled(HeadingCard)`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
    margin-left: 40px;
  }
`;

export const CreateJobButton = styled(Button)`
  height: 48px;
  width: 56px;
  min-width: 0px;
  align-self: center;
  justify-self: center;
  font-size: 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-width: 136px;
  }
`;

export const TextDesktop = styled(Text)`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
  }
`;

export const TextMobile = styled(Text)`
  display: block;
  font-size: 20px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;
