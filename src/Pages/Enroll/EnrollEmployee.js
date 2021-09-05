import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ButtonCommon } from '../../Components/Button';
// import { InputCommon } from '../../Components/Input';
import { AutoComplete } from '../../Components/Select';

const EnrollEmployee = ({
  office,
  companyList,
  LoadCompany,
  onChange,
  applyEmployee
}) => {
  useEffect(() => {
    LoadCompany();
  }, [LoadCompany]);

  return (
    <EnrollForm>
      <EnrollInformation>
        {/* <InputCommon name="name" onChange={onChange} placeholder="회사명" /> */}
        <AutoComplete
          title="회사명"
          view={office.name}
          companyList={companyList}
          name="name"
          onChange={onChange}
        />
      </EnrollInformation>
      <ButtonCommon onClick={applyEmployee} title="등록하기" />
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

export default EnrollEmployee;
