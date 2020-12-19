import { NextPage } from 'next';
import DefaultGrid from '@components/Shared/DefaultGrid';

import PageLayout from '@components/layout/Page';
import type ErrorProps from '@Types/pageProps/Error';

const Error: NextPage<ErrorProps> = ({ statusCode }) => (
  <PageLayout>
    <DefaultGrid>
      <h1>{statusCode}</h1>
      <h2>
        {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
      </h2>
    </DefaultGrid>
  </PageLayout>
);

Error.getInitialProps = ({ res, err }) => {
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

export default Error;
