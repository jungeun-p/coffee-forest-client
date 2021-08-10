import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RequestWorkPage from '../../../Pages/Setting/RequestWorkPage';
import { actions as workActions } from '../../../Store/work';

const RequestWork = () => {
  const { userIndex, companyIndex } = useSelector(state => state.user.userData);
  const { workList } = useSelector(state => state.work);
  const dispatch = useDispatch();

  // 승인
  const onAccept = () => {};
  // 거절
  const onReject = () => {};

  // 리스트
  useEffect(() => {
    let workIndex = {
      userIndex: userIndex,
      companyIndex: companyIndex
    };
    if (workIndex) {
      dispatch(workActions.requestWorkList(workIndex));
      console.log(workList);
    }
  }, [companyIndex, dispatch, userIndex]);

  return (
    workList && (
      <RequestWorkPage
        workList={workList}
        onAccept={onAccept}
        onReject={onReject}
      />
    )
  );
};

export default RequestWork;
