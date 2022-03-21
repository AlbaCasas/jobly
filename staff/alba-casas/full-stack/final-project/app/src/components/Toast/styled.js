import styled, { css } from "styled-components";
import { MdClose } from "react-icons/md";

const successCss = css`
  background-color: #1ea377;
`;

const errorCss = css`
  color: red;
  font-size: 32px;
`;

const infoCss = css`
  color: #027bc2;
  font-size: 32px;
`;

const successBorderCss = css`
  border-left: 3px solid #1ea377;
`;
const errorBordercSS = css`
  border-left: 3px solid red;
`;
const infoBordercSS = css`
  border-left: 3px solid #027bc2; ;
`;

export const StyledToast = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  padding: 24px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.white};
  height: 72px;
  min-width: 300px;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const CloseIcon = styled(MdClose)`
  position: absolute;
  width: 16px;
  height: 16px;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

export const ContainerIcon = styled.div`
  width: fit-content;
  height: fit-content;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 100%;
  padding: 4px;
  color: ${({ theme }) => theme.colors.white};
  ${({ variant }) => {
    switch (variant) {
      case "success":
        return successCss;
      case "error":
        return errorCss;
      default:
        return infoCss;
    }
  }}
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  ${({ variant }) => {
    switch (variant) {
      case "success":
        return successBorderCss;
      case "error":
        return errorBordercSS;
      default:
        return infoBordercSS;
    }
  }}
  padding: 8px;
  margin: -12px;
`;
