import React from "react";
import { Menu, Icon } from "antd";

const Nav = () => {
    const menu = (
        <Menu mode="horizontal" className="menu">
            <Menu.Item key="about">
                <Icon type="facebook" />
            </Menu.Item>
            <Menu.Item key="projects">
                <Icon type="github" />
            </Menu.Item>
            <Menu.Item key="contact">
                <Icon type="youtube" />
            </Menu.Item>
        </Menu>
    );
    return <div>{menu}</div>;
};

export default Nav;
