import React from "react";
import styles from "./testimonialcard.module.scss";
const TestimonialCard: React.FC = ({children}) => {
    return (
    <div className={styles.testimonialCard}>
        <p>"{children}"</p>
    </div>
    );
};

export default TestimonialCard;
