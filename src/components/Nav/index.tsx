import React from "react";
import { Menu } from "antd";

const Nav = () => {
    const menu = (
        <Menu mode="horizontal" className="menu">
            <Menu.Item key="about">About</Menu.Item>
            <Menu.Item key="projects">Projects</Menu.Item>
            <Menu.Item key="contact">Contact Me</Menu.Item>
        </Menu>
    );
    return <div>{menu}</div>;
};

export default Nav;
