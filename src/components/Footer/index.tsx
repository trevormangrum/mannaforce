import React from "react";
import styles from "./footer.module.scss";
import urls from "utils/urls";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <section className={styles.footerSection}>
          <div>
            <h2>Manna Force</h2>
              { urls.links && (
                  Object.keys(urls.links).map(obj => {
                  return <a href={urls.links[obj].path}>{urls.links[obj].pathName}</a>
                  })
              )}
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
