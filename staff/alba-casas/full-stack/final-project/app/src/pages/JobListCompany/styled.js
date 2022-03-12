import styled from "styled-components";
import Box from "../../components/Box";
import Button from "../../components/Button";
import Text from "../../components/Text";
export const View = styled(Box)`
  height: auto;
  display: flex;
  justify-content: center;
  padding: 24px;
`;

export const Section = styled(Box)`
  display: flex;
  margin-top: 144px;
  height: 88px;
  overflow: hidden;
  border-radius: 10px;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
`;

export const ContainerCandidates = styled.div`
  display: flex;
  height: 56px;
  width: 104px;
  gap: 16px;
  align-items: center;
  border-radius: 5px;
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
`;

export const ContainerJobs = styled.div`
  display: flex;
  height: 56px;
  width: 104px;
  gap: 16px;
  align-items: center;
  border-radius: 5px;
`;

export const TextJob = styled(Text)`
  font-size: 28px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.text};
`;

export const JobButton = styled(Button)`
  height: 48px;
  width: 56px;
  min-width: 0px;
  align-self: center;
  justify-self: center;
  font-size: 24px;
`;

export const Table = styled(Box)`
  height: auto;
  margin-top: 32px;
  justify-content: center;
  align-items: center;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: auto;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  justify-content: space-between;
`;

export const Row = styled.div`
  height: 48px;
  padding: 16px;
  width: 100%;
  border-top: 1px solid #dddddd;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  line-height: 16px;
  display: flex;
`;

export const ImageCandidates = styled.img`
  width: 32px;
  height: 32px;
`;
export const RowCandidate = styled.div`
  width: 95px;
  height: 32px;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 4px;
`;
