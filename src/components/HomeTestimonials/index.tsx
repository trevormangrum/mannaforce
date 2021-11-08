import React from  "react";
import TestimonialCard from "src/components/TestimonialCard";
import styles from "./hometestimonials.module.scss";


const HomeTestimonials: React.FC = () => {
    return (
        <section className={styles.container}>
            <div className={styles.wrapper}>
                <h2>Testimonials</h2>
                <div className={styles.testimonialGrid}>
                    <TestimonialCard>test</TestimonialCard>
                    <TestimonialCard>test2</TestimonialCard>
                    <TestimonialCard>test3</TestimonialCard>
                </div>
            </div>
        </section>
    );
}
export default HomeTestimonials;
