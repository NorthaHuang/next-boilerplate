import { NextPage } from 'next';
import Head from 'next/head';

import PageLayout from '@components/layout/PageLayout';
import Grid from '@components/layout/Grid';
import { Button } from '@ui';

const Custom404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Something went wrong</title>
      </Head>

      <PageLayout>
        <Grid>
          <h1>404</h1>
          <h2>Oops... Page not found!</h2>
          <Button type="button" onClick={() => window.history.back()}>
            Take me back home
          </Button>
        </Grid>
      </PageLayout>
    </>
  );
};

export default Custom404;
