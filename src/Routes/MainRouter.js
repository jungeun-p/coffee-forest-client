import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../Pages/Main";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Admin from "../Pages/Admin";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Main */}
        <Route exact path="/">
          <Login />
          <Main />
        </Route>
        {/* User */}
        {/* <Route path="/login">
          <Login />
        </Route> */}
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
