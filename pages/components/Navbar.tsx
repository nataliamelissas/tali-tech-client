import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='bg-violet-800 text-white md:flex md:justify-between md:items-center md:justify-center'>
            <div className="container mx-auto flex justify-between items-center">
                <a href="" className="text-2xl font-bold mx-10">
                    TaliTech
                </a>
                <div className="hidden md:flex mx-10">
                    <Link href="/" className="mx-10 hover:text-gray-300">Home</Link>
                    <Link href="/courses" className="hover:text-gray-300">Courses</Link>
                    <Link href="/schools" className="hover:text-gray-300">At Schools</Link>
                    {/* meet the teachers, contact, mission/values */}
                    <Link href="/about" className="hover:text-gray-300">About</Link> 
                </div>
            </div>
            {/* <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href="/">Home</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/courses">Courses</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/school">At Schools</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/about">About Us</Link>
                </li>
                <li className={styles.navItem}>
                    <Link href="/volunteer">Get Involved</Link>
                </li>
            </ul> */}
        </nav>
    );
};

export default Navbar;