import React from 'react';
import styled from 'styled-components';
import { TitleB } from '../../../../Components/Common';

const WorkPlanList = () => {
  return (
    <WorkWrapperList>
      {/* 이번 달 중 오늘 스케줄 */}
      <TitleB>오늘의 일정</TitleB>
    </WorkWrapperList>
  );
};
const WorkWrapperList = styled.div`
  @media all and (min-width: 768px) {
    margin-left: 70px;
  }
`;
export default WorkPlanList;
