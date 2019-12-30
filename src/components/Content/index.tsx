import React from "react";
import { Layout } from "antd";

import Carosel from "../Carosel";
import "./content.css";

const Content = () => {
    const { Content } = Layout;
    return (
        <Content className="content-style">
            <Carosel />
        </Content>
    );
};

export default Content;
