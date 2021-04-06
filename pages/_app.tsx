import '../assets/styles/Reset.css';
import '../assets/styles/Fonts.css';
import GlobalStyles from '../assets/styles/Global';
import Layout from '../components/Layout';
import { AnimateSharedLayout } from 'framer-motion';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AnimateSharedLayout>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimateSharedLayout>
    </>
  );
}

export default MyApp;
