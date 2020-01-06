import React from "react";
import { Layout } from "antd";

import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

const container = () => {
    return (
        <Layout className="container">
            <Layout>
                <Header />
                <Content />
                <Footer />
            </Layout>
        </Layout>
    );
};

export default container;
