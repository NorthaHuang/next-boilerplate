import { NextPage } from 'next';
import Head from 'next/head';

import PageLayout from '@components/layout/PageLayout';
import Error from '@components/Error';
import type { ErrorProps } from '@components/Error/type';

const ErrorPage: NextPage<ErrorProps> = (props) => (
  <>
    <Head>
      <title>Something went wrong</title>
    </Head>

    <PageLayout>
      <Error {...props} />
    </PageLayout>
  </>
);

ErrorPage.getInitialProps = ({ res, err }) => {
  let statusCode;

  if (res) {
    statusCode = res.statusCode;
  } else if (err) {
    statusCode = err.statusCode;
  } else {
    statusCode = 404;
  }

  return { statusCode };
};

export default ErrorPage;
