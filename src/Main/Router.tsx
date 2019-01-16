/*
 * @Author: BaojunCZ
 * @Date: 2019-01-03 19:30:20
 * @LastEditors: your name
 * @LastEditTime: 2019-01-15 18:14:56
 */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import createBrowserHistory from "history/createBrowserHistory";
import HomePage from "../containers/HomePage";
import DetailPage from "../containers/DetailPage";
import SearchPage from "../containers/SearchPage";

const history = createBrowserHistory();

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} history={history} />
      <Route path="/detail/:id" exact component={DetailPage} history={history} />
      <Route path="/search/:search" exact component={SearchPage} history={history} />
    </Switch>
  </BrowserRouter>
);

export default Router;
