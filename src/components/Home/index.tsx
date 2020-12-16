import { Container, Row, Col } from 'react-bootstrap';

import type HomeProps from '@Types/pageProps/Home';

const Home: React.FC<HomeProps> = ({ launch }) => {
  const date = new Date(launch.timestamp);

  return (
    <main>
      <h1>
        Next SpaceX Launch:
        {launch.mission}
      </h1>
      <p>
        {launch.rocket}
        <span>will take off from</span>
        {launch.site}
        {date.toDateString()}
      </p>
      <Container>
        <Row>
          <Col>
            <h1>Hello Bootstrap!</h1>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default Home;
