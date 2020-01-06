import React from "react";

import { Typography } from "antd";
import "./about.css";

const About = () => {
    const { Title, Text } = Typography;
    return (
        <div className="about">
            <Title level={3}>About Me:</Title>
            <Text>
                I am MERN Stack Developer. But I have worked on Unity Mobile
                game for 3 years. Now A days i am really excited to work on MERN
                Stack.
            </Text>
        </div>
    );
};

export default About;
