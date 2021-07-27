import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions as adminActions } from '../../Store/admin';

const Admin = () => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector(state => state.user.userTokenInfo);
  const dataList = useSelector(state => state.admin);
  const LoadList = useCallback(() => {
    if (accessToken !== null) {
      console.log(accessToken);
      dispatch(adminActions.applicantList(accessToken));
    }
  }, [dispatch, accessToken]);

  useEffect(() => {
    LoadList();
  }, [LoadList]);

  return <>{dataList && <div>로드 중</div>}</>;
};

export default Admin;
