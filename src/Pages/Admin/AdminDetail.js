import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ListDetail } from '../../Components/List';
// import { ListDetail } from '../../Components/List';
import { actions as adminActions } from '../../Store/admin';
const AdminDetail = ({ match }) => {
  const index = match.params.index;
  const dispatch = useDispatch();
  const history = useHistory();
  const { dataDetail } = useSelector(state => state.admin);
  useEffect(() => {
    dispatch(adminActions.applicantDetail(index));
  }, []);
  const onAccept = () => {
    const acceptForm = {
      userIndex: dataDetail.userIndex,
      companyApplicantIndex: dataDetail.index,
      rejectReason: ''
    };
    dispatch(adminActions.acceptCompany(acceptForm));
    history.push('/admin');
  };
  return (
    <div>
      {dataDetail ? (
        <div>
          <ListDetail
            name={dataDetail.userName}
            email={dataDetail.email}
            phone={dataDetail.phone}
            acceptance="allow"
            onClick={onAccept}
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
