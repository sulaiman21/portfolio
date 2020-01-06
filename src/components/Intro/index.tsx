/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Typography } from "antd";

import "./intro.css";

const Intro = () => {
    const { Text, Title } = Typography;
    return (
        <div className="intro">
            <Text>
                <Title>Hi Sulaiman Is Here</Title>
            </Text>
            <img src={process.env.PUBLIC_URL + "/images/myPic.jpg"} />
        </div>
    );
};

export default Intro;
