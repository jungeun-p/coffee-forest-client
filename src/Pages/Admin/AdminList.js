import React from 'react';
import { useSelector } from 'react-redux';

const AdminList = () => {
  const { dataList } = useSelector(state => state.admin);
  dataList.map(it => console.log(it.companyName));
  return <div></div>;
};

export default AdminList;
