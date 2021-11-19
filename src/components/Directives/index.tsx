import React from "react";
import styles from "./directives.module.scss";

const Directives: React.FC = () => {
    return (
    <section className={styles.container}>
       <div className={styles.wrapper}>
           <h2>Our Goals</h2>
           <ol>
           <li>
               <h3 className={styles.directive}>To create a national campaign to educate and change the public's perception of addiction and who addicts are.</h3>
           </li>
           <li>

               <h3 className={styles.directive}>To change existing laws and pass laws that will benefit families who are powerless in the grips of addiction.</h3>
           </li>
           <li>
               <h3 className={styles.directive}>To help support existing non-profit recovery programs with a high long term success rate.</h3>
           </li>
           </ol>
       </div>
    </section>
    );
};

export default Directives;
