import React from 'react';
import styled from 'styled-components';
import { TitleB } from '../../../../Components/Common';
import { WorkListArticle } from '../../../../Components/List';

const WorkPlanList = ({ scheduleMonthly }) => {
  return (
    <WorkWrapperList>
      {/* 이번 달 중 오늘 스케줄 */}
      <TitleB>오늘의 일정</TitleB>
      {scheduleMonthly &&
        scheduleMonthly
          .filter(
            it =>
              it.scheduleInfo.scheduleType !== 'ENTER' &&
              it.scheduleInfo.scheduleType !== 'LEAVE'
          )
          .map((it, index) => (
            <WorkListArticle
              key={index}
              titleType={it.scheduleInfo.scheduleType}
              title={it.scheduleInfo.title}
              time={`${it.scheduleInfo.startTime}~${it.scheduleInfo.endTime}`}
              userName={it.simpleUserInfo.name}
            />
          ))}
      {scheduleMonthly?.length === 0 && (
        <div className="noSchedule">스케줄이 없습니다.</div>
      )}
    </WorkWrapperList>
  );
};
const WorkWrapperList = styled.div`
  .noSchedule {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #858585;
  }
`;
export default WorkPlanList;
