import React from 'react';
import styled from 'styled-components';
import { ButtonCommon } from '../../Components/Button';
import { InputCommon } from '../../Components/Input';

const EnrollOffice = ({ office, onChange, onClick }) => {
  const formEnrollInfo = [
    {
      index: 1,
      name: 'officeName',
      onChange: onChange,
      placeholder: '회사명'
    },
    {
      index: 2,
      name: 'officeAddress',
      onChange: onChange,
      placeholder: '주소'
    },
    {
      index: 3,
      name: 'officeNumber',
      onChange: onChange,
      placeholder: '사업자 번호'
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