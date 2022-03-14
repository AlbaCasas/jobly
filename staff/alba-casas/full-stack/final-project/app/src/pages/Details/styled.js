import styled from "styled-components";
import Text from "../../components/Text";
import Button from "../../components/Button";
import { MdArrowBack } from "react-icons/md";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Header = styled.div`
  width: 100%;
  height: 160px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const ArrowBack = styled(MdArrowBack)`
  font-size: 24px;
`;

export const GoBackText = styled(Text)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ImageStyled = styled.img`
  width: 64px;
  height: 64px;
`;
export const ImageContainer = styled.div`
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.white};
  top: 128px;
  position: absolute;
  border-radius: 5px;
  z-index: 2;
`;

export const StyledLocation = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledTextContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 16px;
  margin-bottom: 32px;
`;
export const StyledTextDescription = styled(Text)`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  width: 100%;
`;

export const StyledTextBodyDescription = styled(Text)`
  font-size: 16px;
  line-height: 24px;
`;

export const StyledButton = styled(Button)`
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 300px;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
