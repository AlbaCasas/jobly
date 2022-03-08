import styled from "styled-components";

export const StyledDropdown = styled.div`
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 90px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  margin-left: auto;
  gap: 8px;
  box-shadow: 0px 4px 20px #e5e5e5;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 220px;
    right: 80px;
    border-radius: 10px;
  }
`;

export const ContainerSelect = styled.div`
  height: 40px;
  width: 100%;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
`;

export const ContainerSelectViewProfile = styled.div`
  height: 36px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  margin-bottom: 8px;
`;

export const ContainerMyJobs = styled.div`
  height: 36px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  margin-bottom: 8px;
`;
