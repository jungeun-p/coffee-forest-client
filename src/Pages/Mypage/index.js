import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MonthlyPage from '../Mypage/MonthlyPage';
import HeaderNav from '../Mypage/HeaderNav';
import styled from 'styled-components';
import { ContainerRoot, ContentsWrapper } from '../../Components/Common';
// import ProfilePage from '../Setting/ProfilePage';
import SettingContainer from '../Setting';
import WeeklyPlan from '../../System/Mypage/Weekly/WeeklyPlan';

const MypageContainer = () => {
  return (
    <BrowserRouter>
      <MainPage>
        <HeaderNav />
        <ContainerRoot>
          <ContentsWrapper>
            <Route exact path="/mypage" component={WeeklyPlan} />
            <Route path="/mypage/monthly" component={MonthlyPage} />
            <Route path="/mypage/manage" component={SettingContainer} />
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
