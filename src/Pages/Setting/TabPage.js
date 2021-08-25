import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import { TitleB } from '../../Components/Common';
import ProfilePage from './ProfilePage';
import TabMenu from './TabMenu';
import RequestEmployee from '../../System/Setting/Request/RequestEmployee';
import ManageWork from '../../System/Setting/Manage/ManageWork';
import RequestWork from '../../System/Setting/Request/RequestWork';
import ManageEmployee from '../../System/Setting/Manage/ManageEmployee';
import EditProfile from '../../System/Setting/Edit/EditProfile';

const TabPage = () => {
  return (
    <BrowserRouter>
      <SettingWrap>
        <div className="profile">
          <div className="info">
            <TitleB>내 정보</TitleB>
            <ProfilePage />
            <TabMenu />
          </div>
        </div>
        <div className="page">
          <Route path="/mypage/manage/edit" component={EditProfile} />
          <Route path="/mypage/manage/setting" component={ManageWork} />
          <Route path="/mypage/manage/employee" component={ManageEmployee} />
          <Route path="/mypage/manage/work" component={RequestWork} />
          <Route
            path="/mypage/manage/requestEmployee"
            component={RequestEmployee}
          />
        </div>
      </SettingWrap>
    </BrowserRouter>
  );
};

const SettingWrap = styled.div``;

export default TabPage;
