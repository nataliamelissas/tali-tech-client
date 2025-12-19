import React from "react";
import Image from "next/image";
// import Navbar from './Navbar';
import styles from "@/styles/PageHeader.module.scss";

type PageHeaderProps = {
  srcImg: string;
};

const PageHeader: React.FC<PageHeaderProps> = ({ srcImg }) => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.banner}>
          <Image
            src={srcImg}
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
