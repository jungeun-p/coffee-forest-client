import React from 'react';
import styled from 'styled-components';
import { ButtonCommon } from '../../Components/Button';
import { TitleB } from '../../Components/Common';
import { InputCommon, InputTitleS } from '../../Components/Input';

const SettingWork = () => {
  return (
    <SettingForm>
      <WorkInformation>
        <TitleB>근태 설정</TitleB>
        <InputTitleS title="근무 시간 지정" />
        <div className="time">
          <InputCommon name="" value="" placeholder="출근 시간" />
          <InputCommon name="" value="" placeholder="퇴근 시간" />
        </div>
      </WorkInformation>
      <ButtonCommon onClick={() => {}} title="저장하기" />
    </SettingForm>
  );
};

const SettingForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const WorkInformation = styled.div`
  .time {
    display: flex;
    flex-direction: row;
  }
`;

export default SettingWork;
