
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";
import Login from "layouts/Login.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/admin" component={Admin} />
      {/* <Route path="/rtl" component={RTL} /> */}
      <Redirect from="/dashbord" to="/admin/dashboard" />

      <Route from="/"  component={Login}/>
    </Switch>
  </Router>,
  document.getElementById("root")
);
