import GlobalStyles from "../styles/GlobalStyles";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <GlobalStyles />
    </SessionProvider>
  );
}

export default MyApp;
