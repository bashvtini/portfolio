import React from "react";

import Layout from "@components/Layout";
import Contact from "@components/Contact/index";

const ContactPage: React.FC = () => {
  return (
    <Layout>
      <main>
        <Contact />
      </main>
    </Layout>
  );
};

export default ContactPage;
