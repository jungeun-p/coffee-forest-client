import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import RequestWorkPage from '../../../Pages/Setting/RequestWorkPage';
import { LOCAL_HOST } from '../../../Lib/constant';

const RequestWork = () => {
  const { userIndex, companyIndex } = useSelector(state => state.user.userData);
  // 승인
  const onAccept = () => {};
  // 거절
  const onReject = () => {};
  // 리스트
  const LoadRequestWork = () => {
    let workIndex = {
      userIndex: userIndex,
      companyIndex: companyIndex
    };
    axios
      .post(`${LOCAL_HOST}schedule-applicant`, workIndex)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response);
      });
  };
  useEffect(() => {
    LoadRequestWork();
  });
  return <RequestWorkPage onAccept={onAccept} onReject={onReject} />;
};

export default RequestWork;
