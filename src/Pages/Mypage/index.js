import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//import MypageBody from '../Mypage/MypageBody';
import WeeklyPage from '../Mypage/WeeklyPage';
import MonthlyPage from '../Mypage/MonthlyPage';
import ManageEmployee from '../Mypage/ManageEmployee';
import HeaderNav from '../Mypage/HeaderNav';
import styled from 'styled-components';

const MypageContainer = () => {
  return (
    <>
      <p>coffee forest</p>
      <MainPage>
        <BrowserRouter>
          <HeaderNav />
          <PageWrapper>
            <Route exact path="/mypage" component={WeeklyPage} />
            <Route path="/mypage/monthly" component={MonthlyPage} />
            <Route path="/mypage/manage" component={ManageEmployee} />
          </PageWrapper>
        </BrowserRouter>
      </MainPage>
    </>
  );
};

const MainPage = styled.div`
  display: flex;
  flex-direction: row;
`;
const PageWrapper = styled.div`
  width: 85vw;
`;

export default MypageContainer;
