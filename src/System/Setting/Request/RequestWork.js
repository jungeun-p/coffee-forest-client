import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RequestWorkPage from '../../../Pages/Setting/RequestWorkPage';
import { actions as workActions } from '../../../Store/work';

const RequestWork = () => {
  const dispatch = useDispatch();
  const { userIndex, companyIndex } = useSelector(state => state.user.userData);
  const { workList, workStatus } = useSelector(state => state.work);
  // 승인
  const onAccept = index => {
    const indexData = {
      scheduleIndex: index,
      companyIndex: companyIndex,
      userIndex: userIndex
    };
    dispatch(workActions.workAccept(indexData));
  };
  // 거절
  const onReject = index => {
    const indexData = {
      scheduleIndex: index,
      companyIndex: companyIndex,
      userIndex: userIndex
    };
    dispatch(workActions.workReject(indexData));
  };

  // 리스트
  useEffect(() => {
    let workIndex = {
      userIndex: userIndex,
      companyIndex: companyIndex
    };
    if (workIndex) {
      dispatch(workActions.requestWorkList(workIndex));
    }
  }, [workStatus]);

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
