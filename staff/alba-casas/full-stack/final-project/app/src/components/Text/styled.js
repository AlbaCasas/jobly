import styled, { css } from "styled-components";

const bodyCss = css`
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray};
`;

const linkCss = css`
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primary};
`;

const headingCss = css`
  font-size: 40px;
  line-height: 56px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
`;

const subheadingCss = css`
  font-size: 28px;
  line-height: 32px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const bodyBoldCss = css`
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

const captionCss = css`
  font-weight: 400;
  font-size: 14px;
  cursor: pointer;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.text};
`;
const captionBoldCss = css`
  font-weight: 500;
  font-size: 18px;
  line-height: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
`;

const sectionCss = css`
  font-weight: 500;
  font-size: 24px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text};
`;

export const StyledText = styled.span`
  display: inline-block;
  text-align: ${({ textAlign }) => textAlign};
  text-decoration: none;
  margin: 0;
  ${({ variant }) => {
    switch (variant) {
      case "link":
        return linkCss;
      case "heading":
        return headingCss;
      case "subheading":
        return subheadingCss;
      case "body-bold":
        return bodyBoldCss;
      case "caption":
        return captionCss;
      case "section":
        return sectionCss;
      case "captionBold":
        return captionBoldCss;
      default:
        return bodyCss;
    }
  }}
  color: ${({ color }) => color};
  width: fit-content;
`;
