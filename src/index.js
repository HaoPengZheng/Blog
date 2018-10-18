import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route } from "react-router-dom";
import { App, Login, Register } from "./App";


function home() {
    return <h1>Home Page</h1>;
}
const ParamsExample = () => (
    <BrowserRouter>
        <Route path="/" component={App} />
    </BrowserRouter>
);
ReactDOM.render(ParamsExample(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
