import styled from 'styled-components';
import Text from '../../../components/Text';

export const ContainerCandidates = styled.div`
  display: flex;
  height: 56px;
  width: 104px;
  gap: 16px;
  align-items: center;
  border-radius: 5px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 160px;
  }
`;
export const ContainerIcon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 32px;
  line-height: 0px;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primaryLight};
  align-items: center;
  border-radius: 5px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 48px;
    height: 48px;
  }
`;

export const ContainerText = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
  }
`;

export const Subtitle = styled(Text)`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
  }
`;

export const Title = styled(Text)`
  font-size: 28px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.text};
`;
