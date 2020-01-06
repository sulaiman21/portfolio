import React, { useState } from "react";
import { Typography, Tabs, Radio, Row, Icon, Card } from "antd";

import CardComponent from "./Card";

import "./project.css";

const Projects = () => {
    const { Title } = Typography;
    const { TabPane } = Tabs;
    const { Group, Button } = Radio;

    const [tabeMode, setTabMode] = useState<any>("top");
    const handleTabChange = (e: any) => {
        setTabMode(e.target.value);
    };

    return (
        <div className="projects">
            <Card actions={[<Button>see more</Button>]}>
                <div>
                    <Title>
                        {" "}
                        <Icon type="project" />
                        Projects
                    </Title>
                </div>
                <Group onChange={handleTabChange} value={tabeMode}>
                    <Button value="left">
                        <Icon type="align-left" />
                    </Button>
                    <Button value="top">
                        <Icon type="align-center" />
                    </Button>
                </Group>
                <Tabs
                    defaultActiveKey="1"
                    tabPosition={tabeMode}
                    className="tabs"
                >
                    <TabPane tab="Web Projects" key="web-projects">
                        <Row gutter={[16, 16]}>
                            <CardComponent content="abc" />
                            <CardComponent content="abc" />
                            <CardComponent content="abc" />
                            <CardComponent content="abc" />
                            <CardComponent content="abc" />
                        </Row>
                    </TabPane>
                    <TabPane tab="Unity Projects" key="unity-projects">
                        <Row gutter={[16, 16]}>
                            <CardComponent content="abc" />
                            <CardComponent content="abc" />
                            <CardComponent content="abc" />
                            <CardComponent content="abc" />
                            <CardComponent content="abc" />
                            <CardComponent content="abc" />
                        </Row>
                    </TabPane>
                </Tabs>
            </Card>
        </div>
    );
};

export default Projects;
