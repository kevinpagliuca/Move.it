import React from "react";
import Link from "next/link";
import ReactSwitch from "react-switch";
import { signOut } from "next-auth/client";
import { useTheme } from "../contexts/ThemeContext";
import { useRouter } from "next/router";
import { FiLogOut } from "react-icons/fi";
import { AiFillGithub } from "react-icons/ai";
import { IoMdMoon } from "react-icons/io";

import Home from "../assets/home.svg";
import Award from "../assets/award.svg";
import Logo from "../assets/logo-base.svg";

import styles from "../styles/components/SideBar.module.css";

const SideBar: React.FC = () => {
  const { asPath } = useRouter();
  const { theme, themeName, toggleTheme } = useTheme();

  return (
    <div className={styles.container}>
      <header>
        <Logo />
      </header>
      <main>
        <Link href="/" passHref>
          <a className={asPath === "/" ? styles.linkActive : ""}>
            <Home />
          </a>
        </Link>
        <Link href="/leaderboard" passHref>
          <a className={asPath === "/leaderboard" ? styles.linkActive : ""}>
            <Award />
          </a>
        </Link>

        <Link href="#logout" passHref>
          <a
            onClick={() => signOut()}
            className={asPath === "/#logout" ? styles.linkActive : ""}
          >
            <FiLogOut />
          </a>
        </Link>
      </main>
      <footer>
        <div>
          <IoMdMoon />
          <ReactSwitch
            checked={themeName === "dark"}
            height={10}
            width={40}
            handleDiameter={20}
            onChange={toggleTheme}
            className={styles.themeSwitcher}
            onColor={theme.blueDark}
            boxShadow="0px 0px 8px rgba(0, 0, 0, 0.3)"
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </div>

        <a href="https://github.com/kevinpagliuca/move.it" target="_blank">
          <AiFillGithub />
        </a>
      </footer>
    </div>
  );
};

export default SideBar;
