import { css } from "styled-components";

const base = css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap");
  body {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.2;
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export default base;
