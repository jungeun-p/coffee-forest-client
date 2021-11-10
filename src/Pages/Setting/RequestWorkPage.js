import React from 'react';
import styled from 'styled-components';
import { TitleB } from '../../Components/Common';
import { WorkListArticle } from '../../Components/List';

const RequestWork = ({ workList, onReject, onAccept }) => {
  return (
    <ListForm>
      <TitleB>일정 승인 대기</TitleB>
      {workList &&
        workList?.map(work => (
          <WorkListArticle
            key={work.scheduleIndex}
            date={work.date}
            startTime={work.startTime?.slice(0, 5)}
            endTime={work.endTime?.slice(0, 5)}
            title={work.title}
            titleType={work.scheduleType}
            userName={work.userName}
            profileImage={work.profileImage}
            onAccept={() => onAccept(work.scheduleIndex)}
            onReject={() => onReject(work.scheduleIndex)}
          />
        ))}
      {workList.length === 0 && (
        <div className="noSchedule">요청된 일정이 없습니다.</div>
      )}
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
  .noSchedule {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #858585;
  }
`;

export default RequestWork;
