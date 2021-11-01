import React from "react";
import styles from "./header.module.scss"; 
const Header: React.FC = () => {
    return (
        <nav className={styles.navigation}>
            <a className={styles.logo} href='/'><img src='/mannaforce.png' /> </a>
            <div className={styles.linkCollection}>
                <a className={styles.navLink} href='/'>Home</a>
                <a className={styles.navLink} href='/about'>About Us</a>
                <a className={styles.navLink} href='/contact'>Contact Us</a>
                <a className={styles.navLink} href='/testimonials'>Testimonials</a>
                <a className={styles.navLink} href='/blog'>Blog</a>
                <a className={styles.navActionButton} href='/donate'>Donate</a>
            </div>
        </nav>
    );
};


export default Header;
