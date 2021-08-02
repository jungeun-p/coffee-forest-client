import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AdminList from '../../Pages/Admin/AdminList';
import { actions as adminActions } from '../../Store/admin';

const Admin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const LoadList = useCallback(() => {
    dispatch(adminActions.applicantList());
  }, [dispatch]);
  const { dataList } = useSelector(state => state.admin);
  const LoadDetail = index => {
    if (dataList.map(item => item.index === index)) {
      history.push(`/admin/${index}`);
    }
  };
  // const LoadDetail = () => {
  //   if (index) {
  //     history.push(`/admin/${index}`);
  //   }
  // };
  useEffect(() => {
    LoadList();
  }, [LoadList]);
  return (
    <>
      {dataList ? <AdminList LoadDetail={LoadDetail} /> : <div>loading...</div>}
    </>
  );
};

export default Admin;
