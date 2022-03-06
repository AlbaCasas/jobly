import styled from "styled-components";
import Box from "../../components/Box";
import Button from "../../components/Button";
import CardButton from "../../components/CardButton";

export const View = styled(Box)`
  display: flex;
  height: 100vh;
  padding: 32px 24px;
`;

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const StyledCardButton = styled(CardButton)`
  max-width: 96px;
`;
