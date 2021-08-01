import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import {
  ContainerRoot,
  ContentsWrapper,
  TitleB
} from '../../Components/Common';
import Admin from '../../System/Admin/Admin';
import AdminDetail from './AdminDetail';

const AdminContainer = () => {
  return (
    <BrowserRouter>
      <ContainerRoot>
        <ContentsWrapper>
          <AdminWrap>
            <div className="box">
              <TitleB>회사 등록 신청 리스트</TitleB>
              <Route exact path="/admin" component={Admin} />
              <Route path="/admin/:index" component={AdminDetail} />
            </div>
          </AdminWrap>
        </ContentsWrapper>
      </ContainerRoot>
    </BrowserRouter>
  );
};

const AdminWrap = styled.div`
  @media all and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .box {
    @media all and (min-width: 768px) {
      width: 315px;
      /* background: #ffffff;
      box-shadow: 8px 8px 20px rgba(0, 0, 0, 0.05);
      border-radius: 16px; */
      /* padding: 40px 30px 0 30px; */
      margin: 0;
    }
  }
`;

export default AdminContainer;
