import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ManageWorkPage from '../../../Pages/Setting/ManageWorkPage';
import { actions as companyActions } from '../../../Store/company';

const ManageWork = () => {
  const [setting, setSetting] = useState({
    workStartTime: '',
    workEndTime: '',
    lunchStartTime: '',
    lunchEndTime: '',
    flexibleState: '',
    flexibleWorkStartTime: '',
    flexibleWorkEndTime: '',
    fullDayOffUpperYear: '',
    fullDayOffUnderyear: '',
    morningDayOffStartTime: '',
    morningDayOffEndTime: '',
    afternoonDayOffStartTime: '',
    afternoonDayOffEndTime: ''
  });

  const dispatch = useDispatch();
  const { companyIndex, userIndex } = useSelector(state => state.user.userData);
  const { companyEnvironment } = useSelector(state => state.company);
  console.log(companyEnvironment);

  const onChange = e => {
    const { name, value } = e.target;
    setSetting(state => ({ ...state, [name]: value }));
  };
  const UpdateCompany = () => {
    const companySetting = {
      userIndex: userIndex,
      companyIndex: companyIndex,
      workStartTime: setting.workStartTime,
      workEndTime: setting.workEndTime,
      lunchStartTime: setting.lunchStartTime,
      lunchEndTime: setting.lunchEndTime,
      flexibleState: setting.flexibleState,
      flexibleWorkStartTime: setting.flexibleWorkStartTime,
      flexibleWorkEndTime: setting.flexibleWorkEndTime,
      fullDayOffUpperYear: setting.fullDayOffUpperYear,
      fullDayOffUnderyear: setting.fullDayOffUnderyear,
      morningDayOffStartTime: setting.morningDayOffStartTime,
      morningDayOffEndTime: setting.morningDayOffEndTime,
      afternoonDayOffStartTime: setting.afternoonDayOffStartTime,
      afternoonDayOffEndTime: setting.afternoonDayOffEndTime
    };
    dispatch(companyActions.updateCompany(companySetting));
  };

  return (
    <ManageWorkPage
      onChange={onChange}
      setting={setting}
      UpdateCompany={UpdateCompany}
    />
  );
};

export default ManageWork;
