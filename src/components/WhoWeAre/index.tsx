import React from "react";
import styles from "./whoweare.module.scss";
const WhoWeAre: React.FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h2>Who We Are</h2>
          <p>Manna Force is a Not for Profit movement that is committed to bringing the truth of addiction to light. We strive to give families and individuals who suffer from its destruction the answers they need to be restored completely to a productive and fulfilling life.</p>
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
