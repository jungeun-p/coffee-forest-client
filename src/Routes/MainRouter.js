import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../Pages/Main';
import Signup from '../Pages/Signup';
// import Login from '../Pages/Login';
import Admin from '../Pages/Admin';
import Mypage from '../Pages/Mypage';
// import ManageEmployee from '../Pages/Mypage/ManageEmployee';
import Profile from '../Pages/User';
import Setting from '../Pages/Setting';
import Enroll from '../Pages/Enroll';
import WaitingEnroll from '../Pages/Enroll/WaitingEnroll';
import ManageEmployeeDetail from '../Pages/Setting/Manage/Employee/ManageEmployeeDetail';
// import EditProfileImg from '../System/Setting/Edit/EditProfileImg';

const MainRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* Main */}
        <Route exact path="/">
          <Main />
          {/* <Login /> */}
        </Route>
        {/* User */}
        {/* <Route path="/login">
          <Login />
        </Route> */}
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/enroll">
          <Enroll />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/waiting">
          <WaitingEnroll />
        </Route>
        {/* <Route path="/admin/:index">
          <AdminDetail />
        </Route> */}
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/mypage">
          <Mypage />
        </Route>
        <Route path="/mypage/manage">
          <Setting />
        </Route>
        <Route path="/mypage/manage/:index">
          <ManageEmployeeDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default MainRouter;
