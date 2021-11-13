import React from "react";
import styles from "./directives.module.scss";

const Directives: React.FC = () => {
    return (
    <section className={styles.container}>
       <div className={styles.wrapper}>
           <h2>Our Directives</h2>
           <div className={styles.cardGrid}>
               <div className={styles.card}>
                   <h3>Directive #1</h3>
               </div>
               <div className={styles.card}>
                   <h3>Directive #2</h3>
               </div>
               <div className={styles.card}>
                   <h3>Directive #3</h3>
               </div>
           </div>
       </div>
    </section>
    );
};

export default Directives;
