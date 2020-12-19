import { Container, Row, Col } from 'react-bootstrap';

import { GridProps } from './types';

/**
 * If you want to add mutiple <Row /> or add properties on those components,
 * please just import components which from 'react-bootstrap'
 */

const Grid: React.FC<GridProps> = ({ children, noCol = false }) => (
  <Container>
    <Row>{noCol ? { children } : <Col>{children}</Col>}</Row>
  </Container>
);

export default Grid;
