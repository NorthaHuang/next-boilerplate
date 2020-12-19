import { NextPage } from 'next';

import type ErrorProps from '@Types/pageProps/Error';

import { Container, Row, Col } from 'react-bootstrap';

const Error: NextPage<ErrorProps> = ({ statusCode }) => (
  <Container>
    <Row>
      <Col>
        <h1>{statusCode}</h1>
        <h2>
          {statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
        </h2>
      </Col>
    </Row>
  </Container>
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
