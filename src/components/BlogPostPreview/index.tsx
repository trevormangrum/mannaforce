import React from "react";
import { BlogPost } from "utils/types";
import styles from "./styles.module.scss";
interface Props {
    post: BlogPost; 
    admin?: boolean;
}
const BlogPostPreview: React.FC<Props> = ({post, admin}) => {
    const date = new Date(post && post.date).toLocaleDateString("en-US", {
        timeZone: "UTC",
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    })
    const handleDelete = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as HTMLButtonElement;
        const response = await fetch(`/api/blog?id=${target.name}`, {
            method: "DELETE",
        });
        if(response){
            if(response.status === 200) {

            }
        }
    }
    return (
        <div className={styles.container}> 
            <h2 className={styles.title}>{post && post.title}</h2>
            <p className={styles.date}>{date}</p>
            <div className={styles.buttons}>
                <a href={`/blog/${post && post.sys?.id}`} className={styles.viewPostBtn}>View Post</a>
                {admin && (
                    <button name={post && post.sys?.id} className={styles.deleteBtn} onClick={handleDelete}>Delete</button>
                )}
            </div>
        </div>
    )
}
export default BlogPostPreview;