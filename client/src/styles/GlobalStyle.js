import { createGlobalStyle } from 'styled-components';
import base from './base';
import generic from './generic';

export default createGlobalStyle`
  ${generic};
  ${base};
`;
