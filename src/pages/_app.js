import 'nextra-theme-docs/style.css';
import '../common/fonts.css';

export default function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page);
  return getLayout(<Component {...pageProps} />);
}