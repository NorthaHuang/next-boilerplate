import { NextPage } from 'next';

import type ErrorProps from '@Types/pageProps/Error';

const Error: NextPage<ErrorProps> = ({ statusCode }) => (
  <h2>
    {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
  </h2>
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
