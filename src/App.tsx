import * as React from 'react';
import './App.css';
import withRoot from "./withRoot";
import { HashRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routerConfigs from "./router/routerConfigs";
import JssProvider from "react-jss/lib/JssProvider";
import createGenerateClassName from "@material-ui/core/styles/createGenerateClassName";
import jssPreset from "@material-ui/core/styles/jssPreset";
import { create } from "jss";
// import logo from './logo.svg';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());

class App extends React.Component {
  public render() {
    return (
      <div className="App">
          <JssProvider jss={jss} generateClassName={generateClassName}>
              <HashRouter>{renderRoutes(routerConfigs)}</HashRouter>
          </JssProvider>
      </div>
    );
  }
}

export default withRoot(App);
