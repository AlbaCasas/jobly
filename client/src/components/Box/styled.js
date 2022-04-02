import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  width: ${({ width }) => width || '100%'};
  gap: ${({ gap }) => gap};
  margin-bottom: ${({ marginBottom }) => marginBottom};
  margin: ${({ margin }) => margin};
  margin-top: ${({ marginTop }) => marginTop};
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: ${({ padding }) => padding};
  cursor: ${({ cursor }) => cursor};
`;
