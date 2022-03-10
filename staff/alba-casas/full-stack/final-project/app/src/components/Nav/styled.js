import styled from "styled-components";

import Text from "../Text";

export const StyledNav = styled.div`
  z-index: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  width: 100%;
  height: 96px;
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  font-size: 48px;
  color: ${({ theme }) => theme.colors.gray};
  box-shadow: 0px 4px 20px #e5e5e5;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    padding: 32px 128px;
  }
`;

export const StyledText = styled(Text)`
  font-size: 28px;
  line-height: 32px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

export const StyledTextNav = styled.div`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    margin-left: 12px;
    gap: 4px;
  }
`;

export const StyledTextTitle = styled(Text)`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.colors.text};
`;

export const StyleTextRole = styled(Text)`
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.gray};
  user-select: none;
`;
