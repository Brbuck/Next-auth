import { SessionProvider } from "next-auth/react";

import GlobalStyles from "../styles/GlobalStyles";
import Layout from '../Components/layout'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyles />
    </SessionProvider>
  );
}

export default MyApp;
