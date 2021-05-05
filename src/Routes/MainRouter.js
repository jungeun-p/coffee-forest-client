import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../Pages/Main";
import Login from "../Pages/Login";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Main */}
        <Route exact path="/">
          <Main />
        </Route>
        {/* User */}
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
