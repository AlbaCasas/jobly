import styled from "styled-components";

const Box = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  width: ${({ width }) => width};
  gap: ${({ gap }) => gap};
`;

export default Box;
