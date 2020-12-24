import Layout from "../components/Layout";

import "../styles/globals.css";
import "../styles/navbar.css";
import "../styles/footer.css";
import "../styles/navlist.css";
import "../styles/home.css";
import "../styles/highlights.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
