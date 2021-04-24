import { Fragment } from "react";

import Header from "@components/Header";
import Footer from "@components/Footer";

const Layout: React.FC = ({ children }) => {
  return (
    <Fragment>
      <Header />

      {children}

      <Footer />
    </Fragment>
  );
};

export default Layout;
