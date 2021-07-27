import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AdminList from '../../Pages/Admin/AdminList';
import { actions as adminActions } from '../../Store/admin';

const Admin = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const LoadList = useCallback(() => {
    dispatch(adminActions.applicantList());
  }, [dispatch]);

  useEffect(() => {
    setLoading(true);
    LoadList();
    setLoading(false);
  }, [LoadList, loading]);
  return <>{loading ? <div>loading...</div> : <AdminList />}</>;
};

export default Admin;
