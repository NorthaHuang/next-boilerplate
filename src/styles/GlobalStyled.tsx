import { createGlobalStyle } from 'styled-components';

import bootstrapReboot from './vendors/bootstrap-reboot';
import bootstrapGrid from './vendors/bootstrap-grid';

const GlobalStyled = createGlobalStyle`
  ${bootstrapReboot}
  ${bootstrapGrid}
`;

export default GlobalStyled;
