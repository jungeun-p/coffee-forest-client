import React from 'react';
import styled from 'styled-components';
import { ButtonCommon } from '../../Components/Button';
import { TitleB } from '../../Components/Common';
import { InputCommon, InputTitleS } from '../../Components/Input';

const ManageWorkPage = ({ onChange, setting, onClick }) => {
  return (
    <SettingForm>
      <WorkInformation>
        <TitleB>근태 설정</TitleB>
        <div className="article">
          <InputTitleS title="근무 시간 지정" />
          <div className="line">
            <InputCommon
              width="half"
              name="enterTime"
              value={setting?.enterTime}
              onChange={onChange}
              placeholder="출근 시간"
            />
            <InputCommon
              width="half"
              name="outTime"
              value={setting?.outTime}
              onChange={onChange}
              placeholder="퇴근 시간"
            />
          </div>
          <div className="line">
            <InputCommon
              width="half"
              name="lunchEnterTime"
              value={setting?.lunchEnterTime}
              onChange={onChange}
              placeholder="점심 시작 시간"
            />
            <InputCommon
              width="half"
              name="lunchOutTime"
              value={setting?.lunchOutTime}
              onChange={onChange}
              placeholder="점심 마감 시간"
            />
          </div>
        </div>
        <div className="article">
          <InputTitleS title="연차 지정" />
          <div className="line">
            <InputCommon
              width="half"
              name="annualLeaveUnderYear"
              value={setting?.annualLeaveUnderYear}
              onChange={onChange}
              placeholder="입사 기준 1년 미만"
            />
            <InputCommon
              width="half"
              name="annualLeaveUpperYear"
              value={setting?.annualLeaveUpperYear}
              onChange={onChange}
              placeholder="입사 기준 1년 이상"
            />
          </div>
        </div>
        <div className="article flexible">
          <div className="title">
            <input type="checkbox" />
            <InputTitleS title="탄력 근무제" />
          </div>
          <InputCommon
            name="flexibleTimeUnit"
            value={setting?.flexibleTimeUnit}
            onChange={onChange}
            placeholder="시간 단위"
          />
          <div className="line">
            <InputCommon
              width="half"
              name="flexibleEnterTime"
              value={setting?.flexibleEnterTime}
              onChange={onChange}
              placeholder="입사 기준 1년 미만"
            />
            <InputCommon
              width="half"
              name="flexibleOutTime"
              value={setting?.flexibleOutTime}
              onChange={onChange}
              placeholder="입사 기준 1년 이상"
            />
          </div>
        </div>
        <div className="article">
          <InputTitleS title="반차 지정" />
          <div className="line">
            <InputCommon
              width="half"
              name="dayOffEnterAm"
              value={setting?.dayOffEnterAm}
              onChange={onChange}
              placeholder="오전 반차 시작 시간"
            />
            <InputCommon
              width="half"
              name="dayOffOutEnd"
              value={setting?.dayOffOutEnd}
              onChange={onChange}
              placeholder="오전 반차 마감 시간"
            />
          </div>
          <div className="line">
            <InputCommon
              width="half"
              name="dayOffEnterPm"
              value={setting?.dayOffEnterPm}
              onChange={onChange}
              placeholder="오후 반차 시작 시간"
            />
            <InputCommon
              width="half"
              name="dayOffOUtPm"
              value={setting?.dayOffOUtPm}
              onChange={onChange}
              placeholder="오후 반차 마감 시간"
            />
          </div>
        </div>
      </WorkInformation>
      <ButtonCommon onClick={onClick} title="저장하기" />
    </SettingForm>
  );
};

const SettingForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media all and (min-width: 768px) {
    width: 320px;
  }
`;

const WorkInformation = styled.div`
  .title {
    display: flex;
    flex-direction: row;
  }
  .article {
    margin-bottom: 35px;
    .line {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }
  }
`;

export default ManageWorkPage;
