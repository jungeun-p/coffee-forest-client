import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from "../Pages/Main";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Admin from "../Pages/Admin";
import Mypage from "../Pages/Mypage";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Main */}
        <Route exact path="/">
          <Main />
          <Login />
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
        <Route path="/mypage">
          <Mypage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
