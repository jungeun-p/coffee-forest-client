// @ts-nocheck
import React from 'react';
// import { Route } from 'react-router-dom';
// import WeeklyPage from '../Mypage/WeeklyPage';
// import MonthlyPage from '../Mypage/MonthlyPage';
// import ManageEmployee from '../Mypage/ManageEmployee';
import HeaderNav from '../Mypage/HeaderNav';
import MypageList from './MypageList';

const MypageBody = ({ match }) => {
  const cateogry = match.params.category || 'mypage';
  return (
    <>
      <HeaderNav />
      <br />
      <MypageList category={cateogry} />
      {/* <Route path="/mypage" exact component={WeeklyPage} />
      <Route path="/monthly" component={MonthlyPage} />
      <Route path="/manage" component={ManageEmployee} /> */}
    </>
  );
};

export default MypageBody;
