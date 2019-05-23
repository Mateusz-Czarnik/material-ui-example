import React, {Component} from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import './App.css';
import Homepage from "./components/Homepage";
import {theme} from "./theme";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Homepage/>
      </MuiThemeProvider>
    );
  }
}

export default App;
