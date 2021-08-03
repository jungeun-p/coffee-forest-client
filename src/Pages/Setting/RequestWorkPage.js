import React from 'react';
import styled from 'styled-components';
import { TitleB } from '../../Components/Common';

const RequestWork = () => {
  return (
    <ListForm>
      <TitleB>일정 승인 대기</TitleB>
    </ListForm>
  );
};

const ListForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default RequestWork;
