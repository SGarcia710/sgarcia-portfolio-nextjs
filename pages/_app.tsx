import '../assets/styles/Reset.css';
import '../assets/styles/Fonts.css';
import GlobalStyles from '../assets/styles/Global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
