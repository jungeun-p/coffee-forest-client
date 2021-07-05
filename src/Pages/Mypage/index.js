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
    <ContainerRoot>
      <ContentsWrapper>
        <MainPage>
          <BrowserRouter>
            <HeaderNav />
            <PageWrapper>
              <Route exact path="/mypage" component={WeeklyPlan} />
              <Route path="/mypage/monthly" component={MonthlyPage} />
              <Route path="/mypage/manage" component={ManageEmployee} />
            </PageWrapper>
          </BrowserRouter>
        </MainPage>
      </ContentsWrapper>
    </ContainerRoot>
  );
};

const MainPage = styled.div`
  display: flex;
  flex-direction: column;
`;
const PageWrapper = styled.div``;

export default MypageContainer;
