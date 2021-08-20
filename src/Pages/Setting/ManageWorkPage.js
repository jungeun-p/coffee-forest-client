import React from 'react';
import styled from 'styled-components';
import { ButtonCommon } from '../../Components/Button';
import { TitleB } from '../../Components/Common';
import { InputCommon, InputTitleS } from '../../Components/Input';
import FormSelect from '../../Components/Select/FormSelect';

const ManageWorkPage = ({ onChange, setting, UpdateCompany }) => {
  return (
    <SettingForm>
      <WorkInformation>
        <TitleB>근태 설정</TitleB>
        <div className="article">
          <InputTitleS title="근무 시간 지정" />
          <div className="line">
            <InputCommon
              width="half"
              name="workStartTime"
              value={setting?.workStartTime}
              onChange={onChange}
              placeholder="출근 시간"
            />
            <InputCommon
              width="half"
              name="workEndTime"
              value={setting?.workEndTime}
              onChange={onChange}
              placeholder="퇴근 시간"
            />
          </div>
          <div className="line">
            <InputCommon
              width="half"
              name="lunchStartTime"
              value={setting?.lunchStartTime}
              onChange={onChange}
              placeholder="점심 시작 시간"
            />
            <InputCommon
              width="half"
              name="lunchEndTime"
              value={setting?.lunchEndTime}
              onChange={onChange}
              placeholder="점심 마감 시간"
            />
          </div>
        </div>
        <div className="article flexible">
          <div className="title">
            <input type="checkbox" />
            <InputTitleS title="탄력 근무제" />
          </div>
          <div className="line">
            <FormSelect />
            {/* <InputCommon
              width="half"
              name="flexibleWorkStartTime"
              value={setting?.flexibleWorkStartTime}
              onChange={onChange}
              placeholder="출근 선택 시작 시간"
            /> */}
            {/* <InputCommon
              width="half"
              name="flexibleWorkEndTime"
              value={setting?.flexibleWorkEndTime}
              onChange={onChange}
              placeholder="퇴근 선택 마감 시간"
            /> */}
          </div>
        </div>
        {/* <div className="article">
          <InputTitleS title="연차 지정" />
          <div className="line">
            <InputCommon
              width="half"
              name="fullDayOffUpperYear"
              value={setting?.fullDayOffUpperYear}
              onChange={onChange}
              placeholder="입사 기준 1년 이상"
            />
            <InputCommon
              width="half"
              name="fullDayOffUnderyear"
              value={setting?.fullDayOffUnderyear}
              onChange={onChange}
              placeholder="입사 기준 1년 미만"
            />
          </div>
        </div> */}
        <div className="article">
          <InputTitleS title="반차 지정" />
          <div className="line">
            <InputCommon
              width="half"
              name="morningDayOffStartTime"
              value={setting?.morningDayOffStartTime}
              onChange={onChange}
              placeholder="오전 반차 시작 시간"
            />
            <InputCommon
              width="half"
              name="morningDayOffEndTime"
              value={setting?.morningDayOffEndTime}
              onChange={onChange}
              placeholder="오전 반차 마감 시간"
            />
          </div>
          <div className="line">
            <InputCommon
              width="half"
              name="afternoonDayOffStartTime"
              value={setting?.afternoonDayOffStartTime}
              onChange={onChange}
              placeholder="오후 반차 시작 시간"
            />
            <InputCommon
              width="half"
              name="afternoonDayOffEndTime"
              value={setting?.afternoonDayOffEndTime}
              onChange={onChange}
              placeholder="오후 반차 마감 시간"
            />
          </div>
        </div>
      </WorkInformation>
      <ButtonCommon onClick={UpdateCompany} title="저장하기" />
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
      .selectBox {
        width: 40vw;
        margin-top: 15px;
        -webkit-appearance: none; /* for chrome */
        -moz-appearance: none; /*for firefox*/
        appearance: none;
        border-radius: 10px;
        height: 60px;
        padding: 10px 10px;
        background-color: #f8faed;
        border: none;
        font-size: 10px;
        color: black;
      }
      .selectBox::-ms-expand {
        display: none; /*for IE10,11*/
      }
    }
  }
  .article.flexible {
  }
`;

export default ManageWorkPage;
