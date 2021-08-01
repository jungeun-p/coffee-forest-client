import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ListDetail } from '../../Components/List';
// import { ListDetail } from '../../Components/List';
import { actions as adminActions } from '../../Store/admin';
const AdminDetail = ({ match }) => {
  const index = match.params.index;
  const dispatch = useDispatch();
  const { dataDetail } = useSelector(state => state.admin);
  useEffect(() => {
    dispatch(adminActions.applicantDetail(index));
  }, []);
  return (
    <div>
      {dataDetail ? (
        <div>
          <ListDetail
            name={dataDetail.userName}
            email={dataDetail.email}
            phone={dataDetail.phone}
            acceptance="allow"
            businessNumber={dataDetail.businessNumber}
            companyName={dataDetail.companyName}
            address={dataDetail.address}
          />
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default AdminDetail;
