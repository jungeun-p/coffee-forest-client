import React from 'react';
import styled from 'styled-components';
import { TitleB } from '../../Components/Common';

const ManageEmployee = () => {
  return (
    <ListForm>
      <TitleB>사원 관리</TitleB>
    </ListForm>
  );
};

const ListForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export default ManageEmployee;
