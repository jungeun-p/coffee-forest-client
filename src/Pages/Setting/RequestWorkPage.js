import React, { useState } from 'react';
import styled from 'styled-components';
import { TitleB } from '../../Components/Common';
import { WorkListArticle } from '../../Components/List';

const RequestWork = ({ onReject, onAccept }) => {
  const [view, setView] = useState(false);
  const onView = () => {
    setView(!view ? true : false);
  };
  return (
    <ListForm>
      <TitleB>일정 승인 대기</TitleB>
      <WorkListArticle
        onView={onView}
        view={view}
        titleType="외근"
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
  @media all and (min-width: 768px) {
    width: 320px;
  }
`;

export default RequestWork;
