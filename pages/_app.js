import Layout from "../components/Layout";

import "../styles/globals.css";

import "../styles/components/navbar.css";
import "../styles/components/navlist.css";
import "../styles/components/featured.css";
import "../styles/components/card.css";
import "../styles/components/footer.css";
import "../styles/components/headerpage.css";
import "../styles/components/select.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
