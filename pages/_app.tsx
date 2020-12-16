import type { AppProps } from 'next/app';

import GlobalStyled from '@styles/GlobalStyled';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyled />

      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
};

export default App;
