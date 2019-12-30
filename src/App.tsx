import React from "react";
import "./App.css";

import Header from "./pages/Header";
import { Provider } from "react-redux";
import store from "./store";
import { Layout } from "antd";

// import SideBar from "./pages/SideBar";
import Content from "./components/Content";

const App = () => {
    const _store = store();
    return (
        <Provider store={_store}>
            <Layout className="container">
                {/* <SideBar /> */}
                <Layout>
                    <Header />
                    <Content />
                </Layout>
            </Layout>
        </Provider>
    );
};

export default App;
