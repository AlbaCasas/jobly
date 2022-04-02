import styled from 'styled-components';
import Button from '../../../components/Button';
import Select from '../../../components/Select';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 24px;
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

export const TextArea = styled.textarea`
  height: 240px;
  resize: none;
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  border-radius: 5px;
  padding: 16px 12px;
  &:active,
  :focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export const SubmitButton = styled(Button)`
  width: 100%;
  margin-bottom: 24px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 190px;
    align-self: flex-end;
    margin-bottom: 0px;
  }
`;

export const StyledSelect = styled(Select)`
  border: 1px solid ${({ theme }) => theme.colors.grayLight};
  border-radius: 5px;
  padding: 8px 12px;
  height: 48px;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    width: 100%;
    height: 48px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;
