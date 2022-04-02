import styled from 'styled-components';

export const TitleColumn = styled.td`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 200px;
  }
`;

export const LocationColumn = styled.td`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
    width: 160px;
  }
`;

export const RoleColumn = styled.td`
  display: none;
  text-transform: capitalize;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
    width: 160px;
  }
`;

export const DateColumn = styled.td`
  width: 100px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 200px;
  }
`;

export const ImageCompany = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 100%;
`;
