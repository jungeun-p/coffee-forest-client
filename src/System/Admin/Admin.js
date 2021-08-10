import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AdminList from '../../Pages/Admin/AdminList';
import { actions as adminActions } from '../../Store/admin';

const Admin = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { dataList } = useSelector(state => state.admin);

  // const LoadList = useCallback(() => {
  //   dispatch(adminActions.applicantList());
  // }, []);

  const LoadDetail = index => {
    if (dataList.map(item => item.index === index)) {
      history.push(`/admin/${index}`);
    }
  };

  useEffect(() => {
    dispatch(adminActions.applicantList());
  }, [dataList, dispatch]);

  return (
    <>
      {dataList ? (
        <AdminList LoadDetail={LoadDetail} dataList={dataList} />
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};

export default Admin;
