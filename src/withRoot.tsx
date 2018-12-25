import green from "@material-ui/core/colors/green";
import purple from "@material-ui/core/colors/purple";
import CssBaseline from "@material-ui/core/CssBaseline";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import * as React from "react";

/**
 * 全局的主题设置，可用变量传到任何一个组件
 */
const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green
  },
  typography: {
    useNextVariants: true
  }
});

function withRoot(Component: React.ComponentType) {
  function WithRoot(props: object) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...props} />
      </MuiThemeProvider>
    );
  }

  return WithRoot;
}

export default withRoot;
