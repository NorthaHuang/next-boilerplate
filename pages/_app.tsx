import Head from 'next/head';
import type { AppProps } from 'next/app';

import GlobalStyled from '@styles/GlobalStyled';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Home | Website</title>
        <meta name="description" content="My Next.js website" />
      </Head>

      <GlobalStyled />

      <Component {...pageProps} />
    </>
  );
};

export default App;
