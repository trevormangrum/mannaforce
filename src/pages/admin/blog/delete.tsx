import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";
import Layout from "src/components/Layout";
import BlogPosts from "src/components/BlogPosts";
export default withPageAuthRequired(function DeleteBlogPostPage() {
    return(
        <Layout>
            <h1>Delete Blog Post</h1>
            <BlogPosts method="delete"/>

            <style jsx>{`
            h1 {
                text-transform: uppercase;
                color: #11552E;
                text-align:center;
            }
            
            `}</style>
        </Layout>
    )
})