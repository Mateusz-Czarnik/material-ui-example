import {createMuiTheme} from "@material-ui/core";

const DEFAULT_GUTTER = 48;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#27AE60',
    },
    secondary: {
      main: '#F2994A'
    },
    footer: {
      copyright: '#828282'
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      hint: "rgba(0, 0, 0, 0.38)",
    }
  },
  spacing: {
    defaultGutter: DEFAULT_GUTTER
  },
});

export {
  theme,
  DEFAULT_GUTTER
}
