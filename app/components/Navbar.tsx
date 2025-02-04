'use client';
import Link from 'next/link';
import { useState } from 'react';
import navStyle from "@/styles/Navbar.module.scss";

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={navStyle.navbar}>
            <div className={navStyle.navbarContainer}>
                <a href="" className={navStyle.title}>
                    TaliTech
                </a>
                <div className={isOpen ? navStyle.menuOpen : navStyle.menuClosed}>
                    <Link href="/" className={navStyle.navLink}>Home</Link>
                    <Link href="/pages/courses" className={navStyle.navLink}>Courses</Link>
                    <Link href="/pages/schools" className={navStyle.navLink}>At Schools</Link>
                    {/* meet the teachers, contact, mission/values */}
                    <Link href="/pages/about" className={navStyle.navLink}>About Us</Link> 
                </div>
                <div className={navStyle.menuButton}>
                    <button onClick={() => {
                        setIsOpen(!isOpen);
                    }}>
                        <svg className={navStyle.menuSize} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path d="M6 18L18 6M6 6l12 12"></path>
                                ) : (
                                // <path d="M4 6h16M4 12h16M4 18h16"></path>
                                <path d="M4 6h16M4 12h16M4 18h16"></path> 
                            )}
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;