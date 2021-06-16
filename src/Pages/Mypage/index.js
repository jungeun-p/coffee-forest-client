import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import MypageBody from '../Mypage/MypageBody';
import WeeklyPage from '../Mypage/WeeklyPage';
import MonthlyPage from '../Mypage/MonthlyPage';
import ManageEmployee from '../Mypage/ManageEmployee';
import HeaderNav from '../Mypage/HeaderNav';

const MypageContainer = () => {
  return (
    <>
      <p>메인</p>
      <BrowserRouter>
        <HeaderNav />
        <br />
        <Route exact path="/mypage" component={WeeklyPage} />
        <Route path="/mypage/monthly" component={MonthlyPage} />
        <Route path="/mypage/manage" component={ManageEmployee} />
      </BrowserRouter>
    </>
  );
};

export default MypageContainer;
