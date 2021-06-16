import React from 'react';
import { Route } from 'react-router-dom';
import MypageBody from '../Mypage/MypageBody';
// import WeeklyPage from '../Mypage/WeeklyPage';
// import MonthlyPage from '../Mypage/MonthlyPage';
// import ManageEmployee from '../Mypage/ManageEmployee';
// import HeaderNav from '../Mypage/HeaderNav';

const MypageContainer = () => {
  return (
    <>
      <Route path="/:category?" component={MypageBody} />
      {/* <p>Mypage</p>
      <HeaderNav />
      <br />
      <Route path="/mypage" exact component={WeeklyPage} />
      <Route path="/monthly" component={MonthlyPage} />
      <Route path="/manage" component={ManageEmployee} /> */}
    </>
  );
};

export default MypageContainer;
