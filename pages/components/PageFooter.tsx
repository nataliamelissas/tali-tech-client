import React from 'react';
import Link from 'next/link';
import styles from "@/styles/Home.module.css";

const PageFooter = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div>&copy; {new Date().getFullYear()} Tali Tech. All rights reserved.</div>
                <div>
                    <div className="flex justify-around w-full">
                        <div>
                            <Link href="/about">
                                About Us
                            </Link>
                        </div>
                        <div>
                            <Link href="/contact">
                                Contact
                            </Link>
                        </div>
                        <div>
                            <Link href="/privacy">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default PageFooter;