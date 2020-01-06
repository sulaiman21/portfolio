import React from "react";
import { Layout, Col, Row, Icon, Button } from "antd";

import "./header.css";

const HeaderComponent = () => {
    const { Header } = Layout;
    const socialIcons = (
        <Row gutter={16}>
            <Col className="gutter-row" span={1}>
                <Button type="link">
                    <Icon type="facebook" className="iconButton" />
                </Button>
            </Col>
            <Col className="gutter-row" span={1}>
                <Button type="link">
                    <Icon type="youtube" className="iconButton" />
                </Button>
            </Col>
            <Col className="gutter-row" span={1}>
                <Button type="link">
                    <Icon type="github" className="iconButton" />
                </Button>
            </Col>
        </Row>
    );
    return <Header className="header">{socialIcons}</Header>;
};

export default HeaderComponent;
