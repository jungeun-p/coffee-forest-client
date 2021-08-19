import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ManageEmployeePage from '../../../Pages/Setting/Manage/Employee/ManageEmployeePage';
import { actions as employeeActions } from '../../../Store/employee';

const ManageEmployee = () => {
  const [employee, setEmployee] = useState({
    flexibleState: '',
    workStartTime: '',
    workEndTime: '',
    fullDayOffCount: ''
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const { companyIndex, userIndex } = useSelector(state => state.user.userData);
  const { employeeList, employeeInfo } = useSelector(state => state.employee);

  const onChange = e => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  // 사원 리스트 api
  useEffect(() => {
    if (companyIndex) {
      const index = {
        userIndex: '',
        companyIndex: companyIndex
      };
      dispatch(employeeActions.listEmployee(index));
    }
    // setEmployee({ ...employee.employeeList, employeeList });
  }, [dispatch]);

  // 사원 리스트 디테일
  const LoadDetail = index => {
    if (employeeList.map(item => item.userIndex === index)) {
      history.push(`/manage/${index}`);
    }
  };

  // 사원 정보 수정 api
  const updateEmployee = useCallback(() => {
    const employeeData = {
      adminIndex: userIndex,
      companyIndex: companyIndex,
      userIndex: 4,
      flexibleState: true,
      workStartTime: employee.workStartTime,
      workEndTime: employee.workEndTime,
      fullDayOffCount: employee.fullDayOffCount
    };
    dispatch(employeeActions.updateEmployee(employeeData));
  }, [dispatch]);

  return (
    <div>
      <ManageEmployeePage
        onChange={onChange}
        LoadDetail={LoadDetail}
        updateEmployee={updateEmployee}
        employee={employee}
        employeeList={employeeList}
      />
    </div>
  );
};

export default ManageEmployee;
