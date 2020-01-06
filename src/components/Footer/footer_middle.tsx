import React from "react";
import { Row, Col, Icon, Button } from "antd";

import "./footer.css";

const footerMiddle = () => {
    return (
        <div className="footer-middle">
            <Row>
                <Col span={12}>Client Reviews</Col>

                <Col span={6}>
                    <div>
                        <span>
                            <Icon type="facebook" />
                        </span>
                        &nbsp;
                        <span>
                            <Icon type="youtube" />
                        </span>
                        <span>
                            <Icon type="github" />
                        </span>
                    </div>
                </Col>
                <Col span={6}>
                    <Button>Hello</Button>
                </Col>
            </Row>
        </div>
    );
};

export default footerMiddle;
