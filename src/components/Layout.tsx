import React from "react";

import styles from "../styles/components/Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className={styles.container}>{children}</div>;
};

export default Layout;
