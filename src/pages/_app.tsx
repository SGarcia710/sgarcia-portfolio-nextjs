import NextNprogress from 'nextjs-progressbar';

import '@/assets/styles/Reset.css';
import '@/assets/styles/Fonts.css';
import '@/assets/styles/SnippetHighlight.css';

import GlobalStyles from '@/assets/styles/Global';
import Layout from '@/components/Layout';
import { COLORS } from '@/constants';
import ScrollToTop from '@/components/ScrollToTop';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#1A1A1A" />
      </Head>
      <GlobalStyles />
      <Layout>
        <NextNprogress
          color={COLORS.headingColor}
          startPosition={0.3}
          stopDelayMs={200}
          height={2}
          options={{
            showSpinner: false,
          }}
        />
        <Component {...pageProps} />

        <ScrollToTop />
      </Layout>
    </>
  );
}

export default MyApp;
