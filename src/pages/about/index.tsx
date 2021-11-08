import React from "react";
import Layout from "src/components/Layout";
import AboutMannaForce from "src/components/AboutMannaForce";
import Directives from "src/components/Directives";
import TeamMembers from "src/components/TeamMembers";

export default function AboutUsPage() {
    return (
    <Layout>
        <h1>About Us</h1>
        <AboutMannaForce/>
        <Directives/>
        <TeamMembers/>
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
