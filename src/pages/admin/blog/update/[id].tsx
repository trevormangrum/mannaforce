import { withPageAuthRequired } from "@auth0/nextjs-auth0/dist/frontend";
import React from "react";
import CreateBlogPostForm from "src/components/CreateBlogPostForm";
import Layout from "src/components/Layout";
import {useQuery} from "@apollo/client";
import {useRouter} from "next/router";
import queries from "server/actions/Contentful/queries";
import { client } from "server/actions/Contentful";
export default withPageAuthRequired(function UpdateBlogPostContent() {
    const router = useRouter();
    const id = router.query.id;
    const {data, loading, error } = useQuery(queries.blogPosts.getPost, {
        client: client,
        variables: { id },
    })
    return (
        <Layout>
            <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css" />
            <CreateBlogPostForm post={data && !loading && !error && data.blogPostCollection.items[0]}/>
        </Layout>
    )
})