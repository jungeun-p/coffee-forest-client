import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RequestEmployeePage from '../../../Pages/Setting/RequestEmployeePage';
import { actions as employeeActions } from '../../../Store/employee';

const RequestEmployee = () => {
  const dispatch = useDispatch();
  const { userIndex, companyIndex } = useSelector(state => state.user.userData);

  const LoadRequestList = () => {
    const index = {
      userIndex: userIndex,
      companyIndex: companyIndex
    };
    dispatch(employeeActions.requestList(index));
  };

  const AcceptEmployee = index => {
    const indexData = {
      acceptorIndex: userIndex,
      companyIndex: companyIndex,
      workApplicantIndex: index
    };
    dispatch(employeeActions.acceptEmployee(indexData));
  };
  return (
    <RequestEmployeePage
      LoadRequestList={LoadRequestList}
      // AcceptEmployee={AcceptEmployee}
      AcceptEmployee={AcceptEmployee}
    />
  );
};

export default RequestEmployee;
