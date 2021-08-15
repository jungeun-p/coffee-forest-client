import React from 'react';
import ManageEmployeePage from '../../../Pages/Setting/ManageEmployeePage';

const ManageEmployee = () => {
  // 사원 관리 저장
  const acceptance = () => {};
  return (
    <div>
      <ManageEmployeePage acceptance={acceptance} />
    </div>
  );
};

export default ManageEmployee;
