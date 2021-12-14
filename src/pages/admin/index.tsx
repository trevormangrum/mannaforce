import React from "react";
import { withPageAuthRequired } from "@auth0/nextjs-auth0/dist/frontend";
import Layout from "src/components/Layout";

export default withPageAuthRequired(function AdminHomePage() {
    return (
        <Layout>
            <h1>Admin Page</h1>
            <div className="container">
                <h2>Admin Actions</h2>
                <div className="links">
                    <a href="/admin/blog/create">Create Blog Post</a>
                    <a href="/admin/blog/update">Update Blog Post</a>
                    <a href="/admin/blog/delete">Delete Blog Post</a>
                </div>
            </div>
            <style jsx>{`
            h1 {
                text-transform: uppercase;
                color: #11552E;
                text-align:center;
            }
            .container {
                width: 100%;
                max-width:1200px;
                align-self:center;
            }
            .links {
                display:flex;
                flex-direction:column;
            }
            a {
                color: #11552E;
            }
            `}</style>
        </Layout>
    )
})