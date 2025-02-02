import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import styles from "@/styles/PageHeader.module.scss";

const PageHeader = () => {
    return (
        <div>
            <Navbar />
            <div className={styles.header}>
                <div className={styles.banner}>
                    <Image
                        src="/assets/gradient-solid-banner.jpg"
                        alt="Banner Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default PageHeader;