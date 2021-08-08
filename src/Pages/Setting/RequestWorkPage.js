import React from 'react';
import styled from 'styled-components';
import { TitleB } from '../../Components/Common';
import { WorkListArticle } from '../../Components/List';

const RequestWork = ({ onReject, onAccept }) => {
  return (
    <ListForm>
      <TitleB>일정 승인 대기</TitleB>
      <WorkListArticle
        titleType="회의"
        title="개발자 코드리뷰"
        date="06. 08 / 오전 9 : 30 ~ 오전 11 : 30"
      />
    </ListForm>
  );
};

const ListForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default RequestWork;
