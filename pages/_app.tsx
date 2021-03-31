import '../assets/styles/Reset.css';
import '../assets/styles/Fonts.css';
import GlobalStyles from '../assets/styles/Global';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
