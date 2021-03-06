import React from 'react';
import styled from 'styled-components';
import { TitleB } from '../../../../Components/Common';
import EmployeeListArticle from '../../../../Components/List/EmployeeListComponent';

const ManageEmployeePage = ({
  // LoadDetail,
  updateEmployee,
  employeeList,
  employee,
  onChange
}) => {
  return (
    <ListForm>
      <TitleB>사원 관리</TitleB>

      {/* {employee ? (
        employee.map((it, index) => (
          <EmployeeListArticle
            // LoadDetail={() => LoadDetail(it.userIndex)}
            updateEmployee={updateEmployee}
            // key={it.userIndex}
            key={it.index}
            name={it.name}
            profileImage={it.profileImage}
            email={it.email}
            workStartTime={it.workStartTime}
            workEndTime={it.workEndTime}
            fullDayOffCount={it.fullDayOffCount}
            employee={employee}
            onChange={onChange}
          />
        ))
      ) : (
        <div>...</div>
      )} */}

      {/* {!employee.employeeList ? (
        employee?.map((it, index) => (
          <EmployeeListArticle
            acceptance={acceptance}
            key={index}
            name={it.name}
            email={it.email}
            workStartTime={it?.workStartTime}
            workEndTime={it?.workEndTime}
            fullDayOffCount={it?.fullDayOffCount}
            employee={employee}
            onChange={onChange}
          />
        ))
      ) : (
        <div>loading</div>
      )} */}
    </ListForm>
  );
};

const ListForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media all and (min-width: 768px) {
    /* width: 320px; */
  }
`;
export default ManageEmployeePage;
