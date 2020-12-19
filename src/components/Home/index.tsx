import type HomeProps from '@Types/pageProps/Home';

import DefaultGrid from '@components/Shared/DefaultGrid';

const Home: React.FC<HomeProps> = ({ launch }) => {
  const date = new Date(launch.timestamp);

  return (
    <div>
      <DefaultGrid>
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
        <h2>Hello Bootstrap!</h2>
      </DefaultGrid>
    </div>
  );
};

export default Home;
