import { MantineProvider } from '@mantine/core';
import { FeatureToggler, UnrevealedProvider } from '@unrevealed/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '~/styles/globals.css';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Unrevealed Demo</title>
        <meta name="description" content="Unrevealed demo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UnrevealedProvider clientKey={process.env.NEXT_PUBLIC_UNREVEALED_TOKEN!}>
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            colorScheme: 'dark',
          }}
        >
          {process.env.NODE_ENV === 'development' && <FeatureToggler />}
          <Component {...pageProps} />
        </MantineProvider>
      </UnrevealedProvider>
    </>
  );
}
