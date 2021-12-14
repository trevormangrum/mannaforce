import React from "react";
import BlogPostContent from "src/components/BlogPostContent";
import Layout from "src/components/Layout";
import {useRouter} from "next/router";
import {useQuery} from "@apollo/client";
import queries from "server/actions/Contentful/queries";
import { client } from "server/actions/Contentful";
import { BlogPost } from "utils/types";
export default function IndividualBlogPage() {
    const router = useRouter();
    const id = router.query.id;
    const {data, loading, error } = useQuery(queries.blogPosts.getPost, {
        client: client,
        variables: { id: id},
    });
    return( 
        <Layout>
            {data && !loading && !error && (
                <BlogPostContent post={data.blogPostCollection.items[0] as BlogPost} />
            )}
        </Layout>
    )
}