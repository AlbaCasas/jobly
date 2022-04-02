import styled from "styled-components";
import Box from "../../../components/Box";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";

export const StyledModal = styled(Modal)`
  display: flex;
  justify-content: flex-start;
  padding-top: 100px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 40px;
    padding-top: 40px;
  }
`;

export const NameColumn = styled.div`
  flex-grow: 1;
  width: 90px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-grow: 0;
  }
`;

export const EmailColumn = styled.div`
  flex-grow: 0;
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-grow: 1;
    display: block;
  }
`;

export const PhoneColumn = styled.div`
  width: 90px;
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: block;
  }
`;

export const ResumeColumn = styled.div`
  width: 65px;
`;

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 100%;
`;

export const Content = styled(Box)`
  margin-top: 40px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin-top: 0px;
  }
`;

export const Row = styled(Box)`
  height: 96px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 16px 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const CancelButton = styled(Button)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  display: block;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`;
