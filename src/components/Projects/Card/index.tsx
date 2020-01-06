import React from "react";
import { Card, Col, Icon, Tooltip } from "antd";

export interface IPropsInterface {
    content: any;
}

const CardComponent = (props: IPropsInterface) => {
    const { Meta } = Card;
    return (
        <Col className="gutter-row" span={6}>
            <div className="gutter-box">
                <Card
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <Tooltip title="Like">
                            <span>4M</span> &nbsp;
                            <Icon type="like" />
                        </Tooltip>,
                        <Tooltip title="Dislike">
                            <span>70</span> &nbsp;
                            <Icon type="dislike" />
                        </Tooltip>,
                        <Tooltip title="Visit">
                            <Icon type="read" />
                        </Tooltip>
                    ]}
                >
                    <Meta
                        title="Card title"
                        description="This is the description"
                    />
                </Card>
            </div>
        </Col>
    );
};

export default CardComponent;
