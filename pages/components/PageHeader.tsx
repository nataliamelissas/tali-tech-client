import React from 'react';
import Link from 'next/link';
import styles from './PageHeader.module.css';

const PageHeader = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="/">Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/programs">Programs</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/pricing">Pricing</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/instructors">Instructors</Link>
                </li>
            </ul>
        </nav>
    );
};

export default PageHeader;