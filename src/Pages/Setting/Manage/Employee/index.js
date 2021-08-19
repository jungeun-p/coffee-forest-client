import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import ManageEmployee from '../../../../System/Setting/Manage/ManageEmployee';
import ManageEmployeeDetail from './ManageEmployeeDetail';

const EmployeeContainer = () => {
  return (
    <ManageWrap>
      <BrowserRouter>
        {/* <Route exact path="/mypage/manage" component={ManageEmployee} /> */}
        <Route path="/mypage/manage/:index" component={ManageEmployeeDetail} />
      </BrowserRouter>
    </ManageWrap>
  );
};

const ManageWrap = styled.div`
  @media all and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default EmployeeContainer;
