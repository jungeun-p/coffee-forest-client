import React from 'react';
import styled from 'styled-components';
import { TitleB } from '../../Components/Common';

const TabMenu = ({ clickHandler }) => {
  return (
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
  );
};

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

export default TabMenu;
