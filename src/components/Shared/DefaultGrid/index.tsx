import { Container, Row, Col } from 'react-bootstrap';

import DefaultGridProps from './types';

/**
 * If you want to add mutiple <Row />,
 * please just import components which from 'react-bootstrap'
 */

const DefaultGrid: React.FC<DefaultGridProps> = ({ children, noCol = false }) => (
  <Container>
    <Row>{noCol ? { children } : <Col>{children}</Col>}</Row>
  </Container>
);

export default DefaultGrid;
