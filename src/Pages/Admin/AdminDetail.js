import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { ListDetail } from '../../Components/List';
import { actions as adminActions } from '../../Store/admin';

const AdminDetail = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const index = match.params.index;
  const { dataDetail } = useSelector(state => state.admin);
  const { status } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(adminActions.applicantDetail(index));
  }, [status, index]);

  const onAccept = useCallback(() => {
    const acceptForm = {
      userIndex: dataDetail?.userIndex,
      companyApplicantIndex: dataDetail?.index,
      rejectReason: ''
    };
    dispatch(adminActions.acceptCompany(acceptForm));
    history.push('/admin');
  }, [dataDetail, dispatch, history]);

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
        <div>정보가 존재하지 않습니다.</div>
      )}
    </div>
  );
};

export default AdminDetail;
