/*
 * @Author: BaojunCZ
 * @Date: 2019-01-03 19:30:20
 * @LastEditors: your name
 * @LastEditTime: 2019-01-15 14:30:06
 */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import HomePage from "../containers/HomePage";

const history = createBrowserHistory();

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} history={history} />
    </Switch>
  </BrowserRouter>
);

export default Router;
