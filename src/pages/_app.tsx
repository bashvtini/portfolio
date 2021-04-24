import type { AppProps } from "next/app";
import { wrapper } from "@store/index";

import "../styles/main.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default wrapper.withRedux(MyApp);
