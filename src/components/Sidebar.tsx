import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiLogOut } from 'react-icons/fi';
import { signOut } from 'next-auth/client'

import Home from '../assets/home.svg';
import Award from '../assets/award.svg';
import Logo from '../assets/logo-base.svg';

import styles from '../styles/components/SideBar.module.css';

import { AiFillGithub } from 'react-icons/ai';

const SideBar: React.FC = () => {
    const { asPath } = useRouter();

    return (
        <div className={styles.container}>
            <header>
                <Logo />
            </header>
            <main>
                <Link href="/" passHref>
                    <a className={asPath === '/' ? styles.linkActive : ''}>
                        <Home />
                    </a>
                </Link>
                <Link href="/leaderboard" passHref>
                    <a className={asPath === '/leaderboard' ? styles.linkActive : ''}>
                        <Award />
                    </a>
                </Link>

                <Link href="#logout" passHref>
                    <a
                        onClick={() => signOut()}
                        className={asPath === '/#logout' ? styles.linkActive : ''}
                    >
                        <FiLogOut />
                    </a>
                </Link>
            </main>
            <footer>
                <a href="https://github.com/kevinpagliuca/move.it" target="_blank">
                    <AiFillGithub />
                </a>
            </footer>
        </div>
    );
}

export default SideBar;