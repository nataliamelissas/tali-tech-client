import React from 'react';
import Image from 'next/image';
import styles from "@/styles/Home.module.css";

const HomePage = () => {
    return (
        <main className={styles.main}>
          
            <div className="w-full h-50 relative">
            <Image
              src="/assets/gradient-solid-banner.jpg"
              alt="Banner Image"
              layout="fill"
              objectFit="cover"
            />
            </div>
            <div className="text-center p-4">
            <div className="text-5xl font-bold text-cyan-500 font-comic-sans">
              Welcome to <code className="text-orange-500">TaliTech</code>.
            </div>
            <div className="text-xl text-gray-700 mt-2">A place where kids code and create!</div>
            </div>

          <div className={styles.ctas}>
            <a
              className={styles.primary}
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className={styles.logo}
                src="https://nextjs.org/icons/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Enroll Now
            </a>
            <a
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              Programs
            </a>
          </div>
        </main>
    );
};

export default HomePage;