import { createGlobalStyle } from 'styled-components';

import bootstrapReboot from './vendors/bootstrap-reboot';
import bootstrapGrid from './vendors/bootstrap-grid';

const GlobalStyled = createGlobalStyle`
  /** Normalize */
  ${bootstrapReboot}

  /** Grid System */
  ${bootstrapGrid}

  /** Custom Setting */
  select {
    cursor: pointer;
  }
`;

export default GlobalStyled;
