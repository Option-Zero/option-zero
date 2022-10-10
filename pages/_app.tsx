import 'normalize.css/normalize.css';  // Sane cross-browser css defaults & resets
import '../styles/globals.css'; // Import our css second to override normalize
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
