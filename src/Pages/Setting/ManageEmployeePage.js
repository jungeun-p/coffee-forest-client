import React from 'react';
import styled from 'styled-components';
import { TitleB } from '../../Components/Common';
import EmployeeListArticle from '../../Components/List/EmployeeListComponent';

const ManageEmployeePage = ({ acceptance }) => {
  return (
    <ListForm>
      <TitleB>사원 관리</TitleB>
      <EmployeeListArticle
        acceptance={acceptance}
        name="김용휘"
        phone="010-3333-3333"
        email="a@naver.com"
      />
    </ListForm>
  );
};

const ListForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media all and (min-width: 768px) {
    width: 320px;
  }
`;
export default ManageEmployeePage;
