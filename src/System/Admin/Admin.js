import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AdminList from '../../Pages/Admin/AdminList';
import { actions as adminActions } from '../../Store/admin';

const Admin = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const LoadList = useCallback(() => {
    dispatch(adminActions.applicantList());
  }, [dispatch]);

  const { dataList } = useSelector(state => state.admin);
  const index = dataList?.map(it => it.index);

  const LoadDetail = () => {
    if (index) {
      history.push(`/admin/${index}`);
    }
  };

  useEffect(() => {
    setLoading(true);
    LoadList();
    setLoading(false);
  }, [LoadList, loading]);

  return (
    <>
      {loading ? <div>loading...</div> : <AdminList LoadDetail={LoadDetail} />}
    </>
  );
};

export default Admin;
