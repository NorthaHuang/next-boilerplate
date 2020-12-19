import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

import PageLayout from '@components/layout/PageLayout';
import Home from '@components/Home';
import type { HomeProps } from '@components/Home/type';

const IndexPage: NextPage<HomeProps> = (props) => (
  <>
    <Head>
      <title>Home | Website</title>
      <meta name="description" content="My Next.js website" />
    </Head>

    <PageLayout>
      <Home {...props} />
    </PageLayout>
  </>
);

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
