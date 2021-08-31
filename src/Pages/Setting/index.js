import React from 'react';
import styled from 'styled-components';
import { TitleB } from '../../Components/Common';
import ProfilePage from './ProfilePage';
import TabMenu from './TabMenu';
import RequestEmployee from '../../System/Setting/Request/RequestEmployee';
import ManageWork from '../../System/Setting/Manage/ManageWork';
import RequestWork from '../../System/Setting/Request/RequestWork';
import ManageEmployee from '../../System/Setting/Manage/ManageEmployee';
import EditProfile from '../../System/Setting/Edit/EditProfile';
import { BrowserRouter, Route } from 'react-router-dom';
import TabPage from './TabPage';
import EditProfileImg from './EditProfileImg';

const SettingContainer = () => {
  return (
    <BrowserRouter>
      <SettingWrapper>
        <div className="profile">
          <div className="info">
            <TitleB>내 정보</TitleB>
            <ProfilePage />
            <TabMenu />
          </div>
        </div>
        <div className="page">
          {/* <TabPage /> */}
          {/* <EditProfile /> */}
          <Route exact path="/mypage/manage" component={EditProfile} />
          <Route path="/mypage/manage/edit" component={EditProfile} />
          <Route path="/mypage/manage/setting" component={ManageWork} />
          <Route path="/mypage/manage/employee" component={ManageEmployee} />
          <Route path="/mypage/manage/work" component={RequestWork} />
          <Route
            path="/mypage/manage/requestEmployee"
            component={RequestEmployee}
          />
          <Route path="/mypage/manage/profileImg" component={EditProfileImg} />
        </div>
      </SettingWrapper>
    </BrowserRouter>
  );
};

const SettingWrapper = styled.div`
  @media all and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    .page {
      /* display: none; */
    }
  }
  @media all and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    .page {
      margin: 0 0 0 60px;
    }
  }
`;

export default SettingContainer;
