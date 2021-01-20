import { Container, Row, Col } from 'react-bootstrap';

import { GridProps } from './types';

/**
 * Grid system wrapper.
 * If you want to add mutiple `<Row />`, `<Col />` or doing other things on inner components,
 * please just import 'react-bootstrap' to use.
 *
 * @param noCol - let `children` to be wrapped in `<Col />` or not.
 */
const Grid: React.FC<GridProps> = ({ noCol = false, children }) => (
  <Container>
    <Row>{noCol ? { children } : <Col>{children}</Col>}</Row>
  </Container>
);

export default Grid;
