import { connect } from "react-redux";

import Layout from "@components/Layout";

import { RootState } from "@store/reducers/index";
import { setLoading } from "@store/actions/authActions";

type Props = {
  loading: boolean;
  setLoading: () => void;
};

const HomePage: React.FC<Props> = ({ loading, setLoading }) => {
  return (
    <Layout>
      <main>
        <h1>{loading ? "Loading" : "Home Page"}</h1>

        <button onClick={setLoading}>Go</button>
      </main>
    </Layout>
  );
};

const mapStateToProps = (state: RootState) => ({
  loading: state.auth.loading,
});

const mapDispatchToProps = {
  setLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
