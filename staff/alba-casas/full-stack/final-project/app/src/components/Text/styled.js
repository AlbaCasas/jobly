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

const heading = css`
  font-size: 40px;
  line-height: 56px;
  font-weight: 400;
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
        return heading;
      default:
        return bodyCss;
    }
  }}
`;
