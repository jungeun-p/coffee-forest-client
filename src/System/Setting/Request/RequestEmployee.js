import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RequestEmployeePage from '../../../Pages/Setting/RequestEmployeePage';
import { actions as employeeActions } from '../../../Store/employee';

const RequestEmployee = () => {
  const dispatch = useDispatch();
  const { userTokenInfo } = useSelector(state => state.user);

  const LoadRequestList = () => {
    const index = {
      userIndex: userTokenInfo.userIndex,
      companyIndex: '1'
    };
    dispatch(employeeActions.requestList(index));
  };

  const ApplyEmployee = () => {
    console.log('승인');
  };
  return (
    <RequestEmployeePage
      LoadRequestList={LoadRequestList}
      ApplyEmployee={ApplyEmployee}
    />
  );
};

export default RequestEmployee;
