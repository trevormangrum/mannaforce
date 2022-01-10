import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import React from "react";
import CreateBlogPostForm from "src/components/CreateBlogPostForm";
import Layout from "src/components/Layout";

export default withPageAuthRequired(function CreateBlogPostPage() {

    return(
        <Layout>
            <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css" />
            <CreateBlogPostForm />
        </Layout>
    )
});