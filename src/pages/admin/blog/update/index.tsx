import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";
import BlogPosts from "src/components/BlogPosts";
import Layout from "src/components/Layout";

export default withPageAuthRequired(function AdminUpdateBlogPostPage() {
    return (
        <Layout>
            <div className="container">
                <h1>Update Blog Post</h1>
                <p className="subheader">Please select a blog post from the list below and click the "Update" button to update that blog post's information.</p>
                <BlogPosts method="update" />             
                </div>
            <style jsx>{`
            .container {
                width: 100%;
                max-width: 1200px;
                align-self:center;
            }
            h1 {
                text-transform: uppercase;
                color: #11552E;
                text-align:center;
            }
            .subheader {
                text-align:center;
            }
            `}</style>
        </Layout>
    )
})