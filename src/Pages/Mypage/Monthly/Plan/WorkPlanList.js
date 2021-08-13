import React from 'react';
import styled from 'styled-components';
import { TitleB } from '../../../../Components/Common';
import { WorkListArticle } from '../../../../Components/List';

const WorkPlanList = () => {
  return (
    <WorkWrapperList>
      {/* 이번 달 중 오늘 스케줄 */}
      <TitleB>오늘의 일정</TitleB>
      <WorkListArticle
        titleType="MEETING"
        title="개발자 코드리뷰"
        date="06. 08"
        time="오전 9 : 30 ~ 오전 11 : 30"
      />
      <WorkListArticle
        titleType="VACATION"
        title="박지민 휴가"
        date="06. 08"
        time="오전 9 : 30 ~ 오전 11 : 30"
      />
    </WorkWrapperList>
  );
};
const WorkWrapperList = styled.div``;
export default WorkPlanList;
