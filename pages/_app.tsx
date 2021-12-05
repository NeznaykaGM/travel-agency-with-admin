import * as React from 'react';
import Head from 'next/head';
// import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
// local
// import { theme } from '@md-styles/styled/theme';
import { GlobalStyles } from '@md-styles/global';
// global css
import 'normalize.css/normalize.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <div>
    <Head>
      <title>Website | Home</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
      <meta charSet='utf-8' />
    </Head>
    <Component {...pageProps} />
    <GlobalStyles />
  </div>
);

export default MyApp;
