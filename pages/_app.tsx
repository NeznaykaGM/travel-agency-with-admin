import * as React from 'react';
// hooks
import { useLocalStorage } from '@md-utils/localstorage';
// components
import Head from 'next/head';
// providers
import { ThemeProvider } from 'styled-components';
// mock
import { Trip, TRIPS } from '@md-modules/shared/mock';
// types
import { AppProps } from 'next/app';
// local
import { theme } from '@md-styles/theme';
import { GlobalStyles } from '@md-styles/global';
// global css
import 'normalize.css/normalize.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { setTrips, getTrips } = useLocalStorage<Trip>();

  typeof localStorage !== 'undefined' && (getTrips() || setTrips(TRIPS));

  return (
    <div>
      <Head>
        <title>Website | Home</title>
        <link rel='icon' href='/logos/logo.png' />
        <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1' />
        <meta charSet='utf-8' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link href='https://fonts.googleapis.com/css2?family=Titillium+Web&display=swap' rel='stylesheet' />
      </Head>

      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>

      <GlobalStyles />
    </div>
  );
};

export default MyApp;
