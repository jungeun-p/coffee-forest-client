import React, { useState } from 'react';
import ManageWorkPage from '../../../Pages/Setting/ManageWorkPage';

const ManageWork = () => {
  const [setting, setSetting] = useState({
    enterTime: '',
    outTime: '',
    lunchEnterTime: '',
    lunchOutTime: '',
    flexibleTimeUnit: '',
    flexibleEnterTime: '',
    flexibleOutTime: '',
    annualLeaveUnderYear: '',
    annualLeaveUpperYear: '',
    dayOffEnterAm: '',
    dayOffOutEnd: '',
    dayOffEnterPm: '',
    dayOffOUtPm: ''
  });

  const onChange = e => {
    const { name, value } = e.target;
    setSetting(state => ({ ...state, [name]: value }));
  };
  const onClick = () => {};

  return (
    <ManageWorkPage onChange={onChange} setting={setting} onClick={onClick} />
  );
};

export default ManageWork;
