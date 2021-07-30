import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { ListDetail } from '../../Components/List';
import { actions as adminActions } from '../../Store/admin';
const AdminDetail = ({ match }) => {
  const index = match.params.index;
  const dispatch = useDispatch();
  const { dataDetail } = useSelector(state => state.admin);
  console.log(dataDetail);
  useEffect(() => {
    dispatch(adminActions.applicantDetail(index));
  }, [index]);

  return <div>detail</div>;
};

export default AdminDetail;
