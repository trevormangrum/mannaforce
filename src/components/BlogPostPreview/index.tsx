import React from "react";
import { BlogPost } from "utils/types";
import styles from "./styles.module.scss";
interface Props {
    post: BlogPost; 
}
const BlogPostPreview: React.FC<Props> = ({post}) => {
    const date = new Date(post && post.date).toLocaleDateString("en-US", {
        timeZone: "UTC",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    })
    return (
        <div className={styles.container}> 
            <h2 className={styles.title}>{post && post.title}</h2>
            <p className={styles.date}>{date}</p>
            <a href={`/blog/${post && post.sys.id}`} className={styles.viewPostBtn}>View Post</a>
        </div>
    )
}
export default BlogPostPreview;