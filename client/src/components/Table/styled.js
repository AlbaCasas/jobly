import styled from 'styled-components';

export const Table = styled.table`
  display: flex;
  height: auto;
  margin-top: 32px;
  width: 100%;
  justify-content: center;
  align-items: center;
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
  flex-direction: column;
`;

export const Body = styled.tbody`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.thead`
  display: flex;

  flex-direction: column;
  width: 100%;
`;

export const HeaderRow = styled.tr`
  width: 100%;
  height: 32px;
  background-color: ${({ theme }) => theme.colors.background};
  margin-bottom: auto;
  display: flex;
  align-items: center;
  padding: 8px 16px;
  justify-content: space-between;
`;

export const Row = styled.tr`
  height: 48px;
  padding: 16px;
  width: 100%;
  border-top: 1px solid #dddddd;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;
