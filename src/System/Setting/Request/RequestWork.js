import React from 'react';
import RequestWorkPage from '../../../Pages/Setting/RequestWorkPage';

const RequestWork = () => {
  // 승인
  const onAccept = () => {};
  // 거절
  const onReject = () => {};
  return <RequestWorkPage onAccept={onAccept} onReject={onReject} />;
};

export default RequestWork;
