import React from "react";
import styles from "./footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <section className={styles.footerSection}>
          <div>
            <h2>Manna Force</h2>
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Testimonials</a>
            <a href="#">Blog</a>
            <a href="#">Donate</a>
          </div>
          <div>
            <h2>Contact</h2>
            <address className={styles.contactInfo}>
            <span>123 Address St., Selmer, TN, 38375</span>
            <a href='#'>test@gmail.com</a>
            <a href='#'>(000)-000-0000</a>
            </address>
          </div>
        </section>
        <section className={styles.footerSection}>
          <span>
            Website by: <a href="#">MangrumTech</a>
          </span>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
