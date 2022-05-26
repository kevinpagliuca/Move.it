import React from "react";
import { NextPage } from "next";
import { useSession } from "next-auth/react";

import Login from "../pages/login";
import Loader from "../components/Loader";

const withAuth = (Component: NextPage) => {
  const Auth: NextPage = (props: any) => {
    const { data: session, status } = useSession();

    if (status === "loading") {
      return <Loader />;
    }

    if (!session) {
      return <Login />;
    }

    return <Component {...props} />;
  };

  if (Component.getInitialProps) {
    Auth.getInitialProps = Component.getInitialProps;
  }

  return Auth;
};

export default withAuth;
