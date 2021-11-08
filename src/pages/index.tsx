import React from "react";
import HomeTestimonials from "src/components/HomeTestimonials";
import InitialView from "src/components/InitialView";
import Layout from "src/components/Layout";
import WhoWeAre from "src/components/WhoWeAre";
import Head from "next/head";
export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>The Force That Makes a Difference | Manna Force</title>
        <meta name="description" content="Manna Force is a ...."/>
      </Head>
      <InitialView />
      <WhoWeAre />
      <HomeTestimonials />
    </Layout>
  );
}
