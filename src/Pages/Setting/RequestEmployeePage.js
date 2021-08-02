import React from 'react';
import styled from 'styled-components';
import { TitleB } from '../../Components/Common';
import { ListArticle } from '../../Components/List';

const RequestEmployee = () => {
  const acceptance = 'allow';
  return (
    <ListForm>
      <TitleB>사원 수락 대기</TitleB>
      <ListArticle acceptance={acceptance} />
    </ListForm>
  );
};

const ListForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default RequestEmployee;
