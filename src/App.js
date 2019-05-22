import React, {Component} from 'react';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import './App.css';
import Homepage from "./components/Homepage";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#27AE60',
    },
    secondary: {
      main: '#F2994A'
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      hint: "rgba(0, 0, 0, 0.38)",
    }
  },
});

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
