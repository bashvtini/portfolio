import Layout from "@components/Layout";

import withAuth from "@components/HOC/withAuth";

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <main>About Page</main>
    </Layout>
  );
};

export default withAuth(AboutPage);
