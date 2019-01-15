/*
 * @Author: BaojunCZ
 * @Date: 2019-01-03 19:30:20
 * @LastEditors: your name
 * @LastEditTime: 2019-01-15 13:53:12
 */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import HomePage from "../containers/HomePage";

const history = createBrowserHistory();

const Router = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route path="/" exact component={HomePage} history={history} />
    </Switch>
  </BrowserRouter>
);

export default Router;
