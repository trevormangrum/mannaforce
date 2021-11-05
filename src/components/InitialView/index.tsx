import React from "react";
import styles from "./initialview.module.scss";
const InitialView: React.FC = () => {
    return (
        <section className={styles.initialView}>
            <div className={styles.wrapper}>
                <p>We are</p>
                <h1>The Force That Makes a Difference</h1>
                <h3>Commited to bringing the truth of addiction to light.</h3>
                <div className={styles.buttons}>
                    <a href='/about'>About Us</a>
                    <a href='/donate'>Donate</a>
                </div>
            </div>
        </section>
    );
};

export default InitialView;