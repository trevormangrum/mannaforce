import {useRouter} from "next/router";
import React from "react";
import { BlogPost } from "utils/types";
import styles from "./styles.module.scss";
import urls from "utils/urls";
interface Props {
    post: BlogPost; 
    method?: string;
}
const BlogPostPreview: React.FC<Props> = ({post, method}) => {
    const router = useRouter();
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
    const handleUpdate = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = e.target as HTMLButtonElement;
        router.push(`${urls.baseUrl}/admin/blog/update/${target.name}`)
    }
    return (
        <div className={styles.container}> 
            <h2 className={styles.title}>{post && post.title}</h2>
            <p className={styles.date}>{date}</p>
            <div className={styles.buttons}>
                <a href={`/blog/${post && post.sys?.id}`} className={styles.viewPostBtn}>View Post</a>
                {method == "delete" && (
                    <button name={post && post.sys?.id} className={styles.deleteBtn} onClick={handleDelete}>Delete</button>
                )}
                {method == "update" && (
                    <button name={post && post.sys?.id} className={styles.updateBtn} onClick={handleUpdate}>Update</button>
                )}
            </div>
        </div>
    )
}
export default BlogPostPreview;