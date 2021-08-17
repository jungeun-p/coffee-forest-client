import React, { useState } from 'react';
import styled from 'styled-components';
import { TitleB } from '../../Components/Common';
import ProfilePage from './ProfilePage';
import TabMenu from './TabMenu';
import TabPage from './TabPage';
import RequestEmployee from '../../System/Setting/Request/RequestEmployee';
import ManageWork from '../../System/Setting/Manage/ManageWork';
import RequestWork from '../../System/Setting/Request/RequestWork';
import ManageEmployee from '../../System/Setting/Manage/ManageEmployee';
import EditProfile from '../../System/Setting/Edit/EditProfile';

const SettingContainer = () => {
  const [tab, setTab] = useState({
    activeId: 0
  });

  const obj = {
    0: <EditProfile />,
    1: <ManageWork />,
    2: <ManageEmployee />,
    3: <RequestWork />,
    4: <RequestEmployee />
  };

  const clickHandler = id => {
    setTab({ activeId: id });
  };

  return (
    <SettingWrapper>
      <div className="profile">
        <TitleB>내 정보</TitleB>
        <ProfilePage />
        <TabMenu clickHandler={clickHandler} />
      </div>
      <div className="page">
        <TabPage obj={obj} tab={tab} />
      </div>
    </SettingWrapper>
  );
};

const SettingWrapper = styled.div`
  .page {
    margin: 35px 0 0 0;
  }
  @media all and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    .page {
      margin: 0 0 0 60px;
      /* width: 320px; */
    }
  }
`;

export default SettingContainer;
