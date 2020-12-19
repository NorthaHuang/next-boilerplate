import { NextPage } from 'next';
import DefaultGrid from '@components/Shared/DefaultGrid';

import PageLayout from '@components/layout/Page';

const Custom404: NextPage = () => (
  <PageLayout>
    <DefaultGrid>
      <h1>404</h1>
      <h2>Oops... Something went wrong!</h2>
    </DefaultGrid>
  </PageLayout>
);

export default Custom404;
