import NextNprogress from 'nextjs-progressbar';

import '@/assets/styles/Reset.css';
import '@/assets/styles/Fonts.css';
import '@/assets/styles/SnippetHighlight.css';

import GlobalStyles from '@/assets/styles/Global';
import Layout from '@/components/Layout';
import { COLORS } from '@/constants';
import ScrollToTop from '@/components/ScrollToTop';

function MyApp({ Component, pageProps }) {
  return (
    <>
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
