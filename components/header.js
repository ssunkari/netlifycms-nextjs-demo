import Head from 'next/head';
import NavBar from "./navbar";
import React from "react";

const HeaderComponent = () => (
    <>
        <Head>
            <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        </Head>
        <NavBar />
    </>

);

export default HeaderComponent;