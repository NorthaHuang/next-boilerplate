import Grid from '@components/layout/Grid';
import { Button } from '@ui';

import type { ErrorProps } from './type';

const Error: React.FC<ErrorProps> = ({ statusCode }) => (
  <Grid>
    <h1>{statusCode}</h1>
    <h2>
      {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
    </h2>

    <Button onClick={() => window.history.back()}>Take me back home</Button>
  </Grid>
);

export default Error;
