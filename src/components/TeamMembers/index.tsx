import React from "react";
import styles from "./teammembers.module.scss";

const TeamMembers: React.FC = () => {
    return (
    <section className={styles.container}>
       <div className={styles.wrapper}>
           <h2>Team Members</h2>
           <div className={styles.cardGrid}>
               <div className={styles.card}>
                   <h3>Team Member 1</h3>
               </div>
               <div className={styles.card}>
                   <h3>Team Member 2</h3>
               </div>
               <div className={styles.card}>
                   <h3>Team Member 3</h3>
               </div>
           </div>
       </div>
    </section>
    );
};

export default TeamMembers;

