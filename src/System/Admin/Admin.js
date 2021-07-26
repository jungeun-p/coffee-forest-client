import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as adminActions } from '../../Store/admin';

const Admin = () => {
  const dispatch = useDispatch();
  const userTokenInfo = useSelector(state => state.user.userTokenInfo);
  console.log(userTokenInfo);
  useEffect(() => {
    dispatch(adminActions.applicantList());
  }, []);
  return <div>adminsystem</div>;
};

export default Admin;
