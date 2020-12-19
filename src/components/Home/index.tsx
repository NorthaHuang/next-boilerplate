import Grid from '@components/layout/Grid';

import type { HomeProps } from './type';

const Home: React.FC<HomeProps> = ({ launch }) => {
  const date = new Date();

  return (
    <Grid>
      <h2>
        Next SpaceX Launch:
        {launch.mission}
      </h2>
      <p>
        {launch.rocket}
        <span>will take off from</span>
        {launch.site}
        {date.toDateString()}
      </p>
      <h2>Hello Bootstrap-Grid!</h2>
    </Grid>
  );
};

export default Home;
