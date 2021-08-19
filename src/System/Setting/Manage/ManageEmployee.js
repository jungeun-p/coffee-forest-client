import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ManageEmployeePage from '../../../Pages/Setting/ManageEmployeePage';
import { actions as employeeActions } from '../../../Store/employee';

const ManageEmployee = () => {
  const [employee, setEmployee] = useState({
    flexibleState: false,
    workStartTime: '',
    workEndTime: '',
    fullDayOffCount: ''
  });
  const { companyIndex } = useSelector(state => state.user.userData);
  const dispatch = useDispatch();
  const { employeeList } = useSelector(state => state.employee);

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
      // if (employeeList) {
      //   setEmployee({ ...employee.employeeList, ...employeeList });
      // }
    }
  }, [dispatch]);

  // 사원 정보 수정 api
  const acceptance = () => {};
  return (
    <div>
      <ManageEmployeePage
        onChange={onChange}
        acceptance={acceptance}
        employee={employee}
        employeeList={employeeList}
      />
    </div>
  );
};

export default ManageEmployee;
