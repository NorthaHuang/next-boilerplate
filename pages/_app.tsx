import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

import GlobalStyled from '@styles/GlobalStyled';
import theme from '@styles/theme';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Home | Website</title>
        <meta name="description" content="My Next.js website" />
      </Head>

      <GlobalStyled />

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
