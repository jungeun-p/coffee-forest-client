import React from 'react';
import { useSelector } from 'react-redux';

const AdminList = () => {
  const { dataList } = useSelector(state => state.admin);
  if (!dataList) {
    console.log('loading...');
  } else {
    dataList.map(it => console.log(it.companyName));
  }
  return (
    <>
      {!dataList ? (
        <div>loading</div>
      ) : (
        <div>{dataList.map(it => it.companyName)}</div>
      )}
    </>
  );
};

export default AdminList;
