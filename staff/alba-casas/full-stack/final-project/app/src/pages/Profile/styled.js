import styled from "styled-components";
import Box from "../../components/Box";
import Button from "../../components/Button";

export const View = styled(Box)`
  height: auto;
  display: flex;
  justify-content: center;
`;

export const Section = styled(Box)`
  display: flex;
  flex-direction: column;
  margin: 144px 24px;
  width: 920px;
  height: auto;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const WrapperHeader = styled.div`
  width: 100%;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
  margin-top: 32px;
`;

export const ContainerPhoto = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 32px;
  border-radius: 10px;
`;

export const StyledImage = styled.img`
  width: 140px;
  height: 140px;
`;

export const ContainerText = styled.div`
  flex-direction: column;
  display: flex;
  width: 100%;
  height: auto;
  gap: 8px;
`;

export const StyledDetailsText = styled.div`
  font-weight: 500;
  font-size: 28px;
`;
export const StyledSpan = styled.span`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.gray};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`;

export const StyledSubTitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 8px;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`;

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
`;