import React from "react";
import styles from "./styles.module.scss";
const CreateBlogPostForm: React.FC = () => {
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
    }
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Create Blog Post</h1>
            <label htmlFor="title">Title</label>
            <input type="text" name="title" placeholder="Post title"/>
            <label htmlFor="author">Author</label>
            <input type="text" name="author" placeholder="Author"/>
            <label htmlFor="text">Post Content</label>
            <textarea name="text" placeholder="Swap to using that thing from Mindversity"/>
            <button className={styles.submitBtn} onClick={handleSubmit}>Create Blog Post</button>
        </div>
    )
}
export default CreateBlogPostForm;