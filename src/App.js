import React, { Component } from 'react';
import { blue, red } from '@material-ui/core/colors';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import InsterPage from "./views/loginPage"
import HomePage from './views/homePage'
import { BrowserRouter, Route } from "react-router-dom";
const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: red,
  },
});
export class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="main">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
          </div>
        </BrowserRouter>
          <InsterPage></InsterPage>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;