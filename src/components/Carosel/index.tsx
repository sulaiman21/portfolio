import React from "react";
import { Carousel, Typography } from "antd";

const CarouselComponent = () => {
    const { Text } = Typography;
    return (
        <Carousel autoplay>
            <div>
                <h3>1</h3>
                <Text>Hello First Carosel</Text>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
        </Carousel>
    );
};

export default CarouselComponent;
