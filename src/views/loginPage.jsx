import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Login from '../components/login/login'
import Register from '../components/login/register'
export default class InsterPage extends React.Component {
  render() {
    return (
      <div className="inster-page" align="center">
        <BrowserRouter>
          <div>
            <Route  path="/login" component={Login} />
            <Route  path="/register" component={Register} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}