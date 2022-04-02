import styled from 'styled-components';

export const TitleColumn = styled.td`
  width: 100%;
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

export const CandidateColumn = styled.td`
  width: 95px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 320px;
  }
`;

export const CandidatesWrapper = styled.div`
  height: 32px;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 100%;
`;
