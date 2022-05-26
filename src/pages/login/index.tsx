import React from "react";
import Head from "next/head";

import { GetServerSideProps, NextPage } from "next";
import {
  FaArrowRight,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaUser,
} from "react-icons/fa";

import { useTheme } from "../../contexts/ThemeContext";
import { useAuth } from "../../contexts/AuthContext";

import styles from "../../styles/pages/Login.module.css";

const Login: NextPage = () => {
  const { theme } = useTheme();
  const { signInGit, signInFB, signInGoogle } = useAuth();

  return (
    <div className={styles.container}>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <section className={styles.backgroundContainer} />
      <section className={styles.formContainer}>
        <img src="/logo-home-light.svg" alt="logo" />

        <strong>Bem-vindo</strong>

        <header>
          <FaUser color={theme.textHighlight} />
          <p>Faça login com sua conta!</p>
        </header>
        <button className={styles.loginButton} onClick={signInGit}>
          <FaGithub />
          Login com GitHub
          <div>
            <FaArrowRight size={32} />
          </div>
        </button>
        <button
          className={styles.loginButton}
          onClick={signInFB}
          style={{ marginTop: "10px" }}
        >
          <FaFacebook />
          Login com Facebook
          <div>
            <FaArrowRight size={32} />
          </div>
        </button>
        <button
          className={styles.loginButton}
          onClick={signInGoogle}
          style={{ marginTop: "10px" }}
        >
          <FaGoogle />
          Login com Google
          <div>
            <FaArrowRight size={32} />
          </div>
        </button>
      </section>
    </div>
  );
};

export default Login;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { theme } = ctx.req.cookies;

  return {
    props: {
      theme,
    },
  };
};
