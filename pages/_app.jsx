import GlobalStyles from "../styles/global-styles";
import Layout from "../components/Layout";
import { AppProvider } from "../context/context";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AppProvider>
      <GlobalStyles />
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.query.planet} />
        </AnimatePresence>
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
