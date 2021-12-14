import Head from "next/head";
import React from "react";
import BlogPosts from "src/components/BlogPosts";
import Layout from "src/components/Layout";

export default function BlogPage() {
    return (
        <Layout>
            <Head>
                <title>Our Blog | MannaForce</title>
            </Head>
            <h1>Our Blog</h1>
            <BlogPosts/>
            <a href="/api/auth/login">test</a>
            <style jsx>{`
            h1 {
                text-transform: uppercase;
                color: #11552E;
                text-align:center;
            }
            `}</style>
        </Layout>
    )
}