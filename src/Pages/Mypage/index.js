import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MonthlyPage from '../Mypage/MonthlyPage';
import ManageEmployee from '../Mypage/ManageEmployee';
import HeaderNav from '../Mypage/HeaderNav';
import styled from 'styled-components';
import WeeklyPlan from '../../System/Mypage/WeeklyPlan';
import { ContainerRoot, ContentsWrapper } from '../../Components/Common';

const MypageContainer = () => {
  return (
    <BrowserRouter>
      <MainPage>
        <HeaderNav />
        <ContainerRoot>
          <ContentsWrapper>
            <Route exact path="/mypage" component={WeeklyPlan} />
            <Route path="/mypage/monthly" component={MonthlyPage} />
            <Route path="/mypage/manage" component={ManageEmployee} />
          </ContentsWrapper>
        </ContainerRoot>
      </MainPage>
    </BrowserRouter>
  );
};

const MainPage = styled.div`
  display: flex;
  flex-direction: column;
  @media all and (min-width: 768px) {
    flex-direction: row;
  }
`;

export default MypageContainer;
