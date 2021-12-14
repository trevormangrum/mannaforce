import React from "react";
import styles from "./styles.module.scss";
import {useQuery} from "@apollo/client";
import { client } from "server/actions/Contentful";
import queries from "server/actions/Contentful/queries";
import BlogPostPreview from "src/components/BlogPostPreview";
import { BlogPost } from "utils/types";
const BlogPosts: React.FC = () => {
    const {data: postData, loading: postLoading, error: postError } = useQuery(queries.blogPosts.getAllPosts, {
        client: client,
        pollInterval: 360000,
    })
    if(postData) {
        console.log(postData);
    }
    return (
        <div className={styles.container}>
            {postData && !postLoading && !postError && (
                postData.blogPostCollection.items.map((post: BlogPost) => {
                    return <BlogPostPreview post={post} />
                })
            )}
        </div>
    )
}
export default BlogPosts;