import React from 'react';

const ManageEmployeeDetail = ({ match }) => {
  const index = match.params.index;
  return <div>{index}</div>;
};

export default ManageEmployeeDetail;
