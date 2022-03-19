import styled from "styled-components";

export const StyledDropdown = styled.div`
  z-index: 3;
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 90px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 220px;
    right: 80px;
    border-radius: 10px;
  }
`;

export const DropdownItem = styled.div`
  padding: 12px 0;
  width: 100%;
  cursor: pointer;
  &:first-of-type {
    margin-top: 12px;
  }
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayLight};
    margin-bottom: 4px;
  }
`;
