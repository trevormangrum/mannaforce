import React from "react";
import styles from "./footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <section className={styles.footerSection}>
          <div>
            <h2>MannaForce</h2>
          </div>
          <div>
            <h2>Contact</h2>
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
