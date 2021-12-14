import React from "react";
import { BlogPost } from "utils/types";
import styles from "./styles.module.scss";
interface Props {
    post: BlogPost;
}
const BlogPostContent: React.FC<Props> = ({post}) => {
    const date = new Date(post && post.date).toLocaleDateString("en-US", {
        timeZone: "UTC",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    })
    return (
        <div className={styles.container}>
            <h1>{post && post.title}</h1>
            <p>{date}</p>
            <p>{post && post.author}</p>
            <p>{post && post.text}</p>
        </div>
    )
}

export default BlogPostContent;