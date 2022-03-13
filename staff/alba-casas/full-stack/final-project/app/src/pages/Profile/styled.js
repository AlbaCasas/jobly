import styled from "styled-components";
import Button from "../../components/Button";
import Input from "../../components/Input";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 48px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;

export const AvatarSection = styled.div`
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: fit-content;
    display: flex;
    align-items: flex-start;
    height: 100%;
  }
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
`;

export const ContainerPhoto = styled.div`
  width: 100%;
  height: auto;

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
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 160px;
  }
`;

export const StyledBlueButton = styled(Button)`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 160px;
  }
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;

export const HalfWidthInput = styled(Input)`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: calc(50% - 12px);
  }
`;
