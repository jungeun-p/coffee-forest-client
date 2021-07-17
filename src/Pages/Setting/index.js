import React, { useState } from 'react';
import styled from 'styled-components';
import { TitleB } from '../../Components/Common';
import ProfilePage from './ProfilePage';
import TabMenu from './TabMenu';
import TabPage from './TabPage';
import ManageEmployee from './ManageEmployee';
import RequestEmployee from './RequestEmployee';
import RequestWork from './RequestWork';
import SettingWork from './SettingWork';

const SettingContainer = () => {
  const [tab, setTab] = useState({
    activeId: 0
  });

  const obj = {
    //0: <EditProfile />,
    1: <SettingWork />,
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
  @media all and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;

export default SettingContainer;
