import React from "react";
import { Layout } from "antd";

// import Carosel from "../Carosel";
import Intro from "../Intro";
import About from "../About";
import Projects from "../Projects";
import "./content.css";

const Content = () => {
    const { Content } = Layout;
    return (
        <Content className="content-style">
            <Intro />
            <About />
            <Projects />
        </Content>
    );
};

export default Content;
