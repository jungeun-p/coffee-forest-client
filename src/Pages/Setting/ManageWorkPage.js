import React from 'react';
import styled from 'styled-components';
import { ButtonCommon } from '../../Components/Button';
import { TitleB } from '../../Components/Common';
import { InputCommon, InputTitleS } from '../../Components/Input';

const ManageWorkPage = () => {
  return (
    <SettingForm>
      <WorkInformation>
        <TitleB>근태 설정</TitleB>
        <div className="article">
          <InputTitleS title="근무 시간 지정" />
          <div className="line">
            <InputCommon
              width="half"
              name=""
              value=""
              placeholder="출근 시간"
            />
            <InputCommon
              width="half"
              name=""
              value=""
              placeholder="퇴근 시간"
            />
          </div>
          <div className="line">
            <InputCommon
              width="half"
              name=""
              value=""
              placeholder="점심 시작 시간"
            />
            <InputCommon
              width="half"
              name=""
              value=""
              placeholder="점심 마감 시간"
            />
          </div>
        </div>
        <div className="article">
          <InputTitleS title="연차 지정" />
          <div className="line">
            <InputCommon
              width="half"
              name=""
              value=""
              placeholder="입사 기준 1년 미만"
            />
            <InputCommon
              width="half"
              name=""
              value=""
              placeholder="입사 기준 1년 이상"
            />
          </div>
        </div>
        <div className="article">
          <input type="checkbox" />
          <InputTitleS title="탄력 근무제" />
          <div className="line">
            <InputCommon
              width="half"
              name=""
              value=""
              placeholder="입사 기준 1년 미만"
            />
            <InputCommon
              width="half"
              name=""
              value=""
              placeholder="입사 기준 1년 이상"
            />
          </div>
        </div>
        <div className="article">
          <InputTitleS title="반차 지정" />
          <div className="line">
            <InputCommon
              width="half"
              name=""
              value=""
              placeholder="오전 반차 시작 시간"
            />
            <InputCommon
              width="half"
              name=""
              value=""
              placeholder="오전 반차 마감 시간"
            />
          </div>
          <div className="line">
            <InputCommon
              width="half"
              name=""
              value=""
              placeholder="오후 반차 시작 시간"
            />
            <InputCommon
              width="half"
              name=""
              value=""
              placeholder="오후 반차 마감 시간"
            />
          </div>
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
  @media all and (min-width: 768px) {
    width: 320px;
  }
`;

const WorkInformation = styled.div`
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
