import React, { useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HeaderNav from '../Mypage/HeaderNav';
import styled from 'styled-components';
import { ContainerRoot, ContentsWrapper } from '../../Components/Common';
import SettingContainer from '../Setting';
import WeeklyPlan from '../../System/Mypage/Weekly/WeeklyPlan';
import MonthlyPlan from '../../System/Mypage/Monthly/MonthlyPlan';
import { useSelector } from 'react-redux';

const MypageContainer = () => {
  const { status } = useSelector(state => state.auth);
  const { logoutToken } = useSelector(state => state.user);

  useEffect(() => {
    // 자동 로그아웃 처리
    const logout = localStorage.getItem('logout');
    if (logoutToken || logout !== null) {
      window.location.replace('/');
    }
  }, [status, logoutToken]);

  return (
    <BrowserRouter>
      <MainPage>
        <HeaderNav />
        <ContainerRoot>
          <ContentsWrapper>
            <Route exact path="/mypage" component={WeeklyPlan} />
            <Route path="/mypage/monthly" component={MonthlyPlan} />
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
