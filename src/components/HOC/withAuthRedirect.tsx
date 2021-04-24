import React, { useEffect } from "react";
import Router from "next/router";

import { connect } from "react-redux";

import AuthLoading from "./authLoading";
import { RootState } from "@store/reducers/index";
import { setLoading } from "@store/actions/authActions";

type Props = {
  WrappedComponent: React.FC;
  expectedAuth: boolean;
  location: string;
};

interface AuthInterface {
  [x: string]: any;
}

export const mapStateToProps = (state: RootState) => ({
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated,
});

export const mapDispatchToProps = {
  setLoading,
};

const fetchData = async (setLoading: () => void) => {
  await new Promise((res) => {
    setTimeout(() => {
      setLoading();
      res(null);
    }, 2000);
  });
};

const WithAuthRedirect = ({
  WrappedComponent,
  expectedAuth,
  location,
}: Props) => {
  const WithAuthRedirectWrapper = ({ ...props }) => {
    const { loading, setLoading, isAuthenticated }: AuthInterface = {
      ...props,
    };

    useEffect(() => {
      fetchData(setLoading as () => void);
    }, []);

    if (loading) {
      return <AuthLoading />;
    }

    if (typeof window !== "undefined" && expectedAuth !== isAuthenticated) {
      Router.push(location);
      return <></>;
    }

    return <WrappedComponent {...props} />;
  };

  return WithAuthRedirectWrapper;
};

const AuthHoc = ({ WrappedComponent, expectedAuth, location }: Props) =>
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(WithAuthRedirect({ WrappedComponent, expectedAuth, location }));

export default AuthHoc;
