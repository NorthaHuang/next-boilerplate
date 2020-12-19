import { NextPage } from 'next';

import { Container, Row, Col } from 'react-bootstrap';

const Custom404: NextPage = () => (
  <Container>
    <Row>
      <Col>
        <h1>404</h1>
        <h2>Oops... Something went wrong!</h2>
      </Col>
    </Row>
  </Container>
);

export default Custom404;
