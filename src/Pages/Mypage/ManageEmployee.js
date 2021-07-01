import React from 'react';
import EmployeeRequest from '../../System/Admin/EmployeeRequest';
import ManageAttendance from '../../System/Mypage/Manage/ManageAttendance';

const ManageEmployee = () => {
  return (
    <>
      <EmployeeRequest />
      <ManageAttendance />
    </>
  );
};

export default ManageEmployee;
