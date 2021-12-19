import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { ButtonCommon } from '../../Components/Button';
// import { InputCommon } from '../../Components/Input';
import { AutoComplete } from '../../Components/Select';

const EnrollEmployee = ({
  employee,
  setEmployee,
  companyList,
  LoadCompany,
  onChange,
  applyEmployee
}) => {
  useEffect(() => {
    LoadCompany();
  }, [LoadCompany]);

  const selectCompany = useCallback(
    (index, name) => {
      setEmployee(state => ({
        ...state,
        companyName: name,
        companyIndex: index
      }));
    },
    [employee.companyIndex]
  );

  return (
    <EnrollForm>
      <EnrollInformation>
        <AutoComplete
          title="회사명"
          employee={employee}
          view={employee.companyName}
          companyList={companyList}
          name="companyName"
          onChange={onChange}
          selectCompany={selectCompany}
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
