import React from 'react';
import Link from 'next/link';
import styles from "@/styles/Home.module.scss";

const PageFooter = () => {
    return (
        <div id="footer-container" className="mt-auto">
            <footer className={`${styles.footer} flex justify-around w-full`}>
                <div className={`${styles.container} m-5`}>
                    <div>&copy; {new Date().getFullYear()} Tali Tech. All rights reserved.</div>
                    <div>
                        <div className="flex justify-around w-full">
                            <div>
                                <Link href="/about">
                                    About
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
        </div>
    );
};

export default PageFooter;