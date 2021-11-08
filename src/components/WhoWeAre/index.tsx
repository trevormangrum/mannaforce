import React from "react";
import styles from "./whoweare.module.scss";
const WhoWeAre: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2>Who We Are</h2>
          <p>Write something about us here...</p>
          <a href="/about">About Us</a>
        </div>
        <div className={styles.image}>
            <img src='#' alt="Something related to Manna Force" />
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
