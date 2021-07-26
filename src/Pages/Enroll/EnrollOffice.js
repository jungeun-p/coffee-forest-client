import React from 'react';
import styled from 'styled-components';
import { ButtonCommon } from '../../Components/Button';
import { InputCommon } from '../../Components/Input';

const EnrollOffice = ({
  onChange,
  onClick,
  ValidateBusinessNumber,
  validNumber,
  companyApplicantStatus
}) => {
  const formEnrollInfo = [
    {
      index: 1,
      name: 'name',
      onChange: onChange,
      placeholder: '회사명'
    },
    {
      index: 2,
      name: 'address',
      onChange: onChange,
      placeholder: '주소'
    },
    {
      index: 3,
      name: 'businessNumber',
      onChange: onChange,
      placeholder: '사업자 번호',
      onBlur: ValidateBusinessNumber,
      validNumber: validNumber,
      companyApplicantStatus: companyApplicantStatus
    }
  ];
  return (
    <EnrollForm>
      <EnrollInformation>
        {formEnrollInfo.map((roll, index) => (
          <div key={index}>
            <InputCommon
              key={roll.key}
              name={roll.name}
              placeholder={roll.placeholder}
              onChange={roll.onChange}
              onBlur={roll?.onBlur}
              validNumber={roll?.validNumber}
              companyApplicantStatus={roll?.companyApplicantStatus}
            />
          </div>
        ))}
      </EnrollInformation>
      <ButtonCommon onClick={onClick} title="등록하기" />
    </EnrollForm>
  );
};

const EnrollForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const EnrollInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export default EnrollOffice;
