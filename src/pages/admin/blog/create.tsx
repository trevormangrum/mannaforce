import React from "react";
import CreateBlogPostForm from "src/components/CreateBlogPostForm";
import Layout from "src/components/Layout";

export default function CreateBlogPostPage() {

    return(
        <Layout>
            <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css" />
            <CreateBlogPostForm />
        </Layout>
    )
}