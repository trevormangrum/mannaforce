import React from "react";
import Layout from "src/components/Layout"
export default function BlogPage() {
    return (
        <Layout>
        <h1>Blog</h1>
        <p>Create blog post component...</p>
        <style jsx>{`
        h1 {
            text-transform: uppercase;
            color: #11552E;
            text-align:center;
        }
        `}</style>
        </Layout>
    );
}
