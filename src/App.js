import React, { Component } from 'react';
import InsterPage from "./views/loginPage"
import HomePage from './views/homePage'
import { BrowserRouter, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route  path="/user" component={InsterPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;