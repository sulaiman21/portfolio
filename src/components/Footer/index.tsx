import React from "react";

import "./footer.css";

import FooterTop from "./footer_top";
import FooterMiddle from "./footer_middle";
import FooterBottom from "./footer_bottom";

const footer = () => {
    return (
        <div className="footer">
            <FooterTop />
            <FooterMiddle />
            <FooterBottom />
        </div>
    );
};

export default footer;
