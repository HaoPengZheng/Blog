import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { App, InsterPage, Login ,Register} from "./App";
const show = () =>{
    return(
        <div>
            <InsterPage></InsterPage>
        </div>
    )
}

const ParamsExample = () => ( 
    <Router>
        <Route path="/:id" component={App}>
            <Route path="login" component={show} />
            <Route path="register" component={Register} />
        </Route>
    </Router>
);
ReactDOM.render(ParamsExample(), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
