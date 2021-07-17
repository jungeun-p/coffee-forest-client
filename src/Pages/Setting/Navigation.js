import React, { useState } from 'react';
import styled from 'styled-components';
import { TitleB } from '../../Components/Common';
import EditProfile from '../User/EditProfile';
import ManageEmployee from './ManageEmployee';
import RequestEmployee from './RequestEmployee';
import RequestWork from './RequestWork';
import SettingWork from './SettingWork';
import TabMenu from './TabMenu';
import TabPage from './TabPage';

const Navigation = () => {
  const [tab, setTab] = useState({
    activeId: 0
  });

  const obj = {
    // 0: <EditProfile />,
    1: <SettingWork />,
    2: <ManageEmployee />,
    3: <RequestWork />,
    4: <RequestEmployee />
  };

  const clickHandler = id => {
    setTab({ activeId: id });
  };
  return (
    <NavigationArticle>
      <div>
        <CategoryWrap>
          <TitleB>계정 설정</TitleB>
          <div className="name" onClick={() => clickHandler(0)}>
            회원정보 수정
          </div>
        </CategoryWrap>
        <CategoryWrap>
          <TitleB>근태 관리</TitleB>
          <div className="name" onClick={() => clickHandler(1)}>
            근태 설정
          </div>
          <div className="name" onClick={() => clickHandler(2)}>
            사원 관리
          </div>
          <div className="name" onClick={() => clickHandler(3)}>
            일정 승인 대기
          </div>
          <div className="name" onClick={() => clickHandler(4)}>
            사원 수락 대기
          </div>
        </CategoryWrap>
      </div>
      <TabPage tab={tab} obj={obj} />
      {/* <CategoryPage>{obj[tab.activeId]}</CategoryPage> */}
    </NavigationArticle>
  );
};

const NavigationArticle = styled.div`
  @media all and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`;
const CategoryWrap = styled.div`
  margin-top: 35px;
  .name {
    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
    /* color: #f8faed; */
    margin-top: 15px;
    cursor: pointer;
  }
`;

const CategoryPage = styled.div``;
export default Navigation;
