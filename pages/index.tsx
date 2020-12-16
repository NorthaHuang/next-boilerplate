import { GetServerSideProps, NextPage } from 'next';

import Home from '@components/Home';
import type HomeProps from '@Types/pageProps/Home';

// eslint-disable-next-line react/jsx-props-no-spreading
const IndexPage: NextPage<HomeProps> = (props) => <Home {...props} />;

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const response = await fetch('https://api.spacexdata.com/v3/launches/next');
  const nextLaunch = await response.json();

  return {
    props: {
      launch: {
        mission: nextLaunch.mission_name,
        site: nextLaunch.launch_site.site_name_long,
        timestamp: nextLaunch.launch_date_unix * 1000,
        rocket: nextLaunch.rocket.rocket_name,
      },
    },
  };
};

export default IndexPage;
