import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router } from "react-router-dom";

import Container from "./container";

// import SideBar from "./pages/SideBar";

const App = () => {
    const _store = store();
    return (
        <Router>
            <Provider store={_store}>
                <Container />
            </Provider>
        </Router>
    );
};

export default App;
