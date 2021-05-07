import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./style.js";
import { Globalstyle } from "./statics/iconfont/iconfont";

ReactDOM.render(
  <Fragment>
    <Globalstyle />
    <App />
  </Fragment>,
  document.getElementById("root")
);
