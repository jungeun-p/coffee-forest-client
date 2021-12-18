import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ManageEmployeePage from '../../../Pages/Setting/Manage/Employee/ManageEmployeePage';
import { actions as employeeActions } from '../../../Store/employee';

const ManageEmployee = () => {
  const [employee, setEmployee] = useState({
    userIndex: '',
    fullDayOffCount: '',
    flexibleState: false,
    workEndTime: '',
    workStartTime: ''
  });
  const dispatch = useDispatch();
  const userIndex = localStorage.getItem('userIndex');
  const companyIndex = localStorage.getItem('companyIndex');
  const { employeeList } = useSelector(state => state.employee);

  // 사원 리스트 api
  useEffect(() => {
    const index = {
      // userIndex: '',
      companyIndex
    };
    dispatch(employeeActions.listEmployee(index));
    console.log(employee);
  }, [employee.userIndex]);

  const onChange = e => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  // // 사원 리스트 디테일
  // const LoadDetail = index => {
  //   if (employeeList.map(item => item.userIndex === index)) {
  //     history.push(`/manage/${index}`);
  //   }
  // };

  // 사원 정보 수정 api
  const updateEmployee = useCallback(() => {
    const employeeData = {
      adminIndex: userIndex,
      companyIndex,
      userIndex: 4,
      flexibleState: true,
      workStartTime: employee.workStartTime,
      workEndTime: employee.workEndTime,
      fullDayOffCount: employee.fullDayOffCount
    };
    dispatch(employeeActions.updateEmployee(employeeData));
  }, []);

  return (
    <div>
      <ManageEmployeePage
        onChange={onChange}
        // LoadDetail={LoadDetail}
        updateEmployee={updateEmployee}
        employee={employee}
        employeeList={employeeList}
      />
    </div>
  );
};

export default ManageEmployee;
