import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ManageWorkPage from '../../../Pages/Setting/ManageWorkPage';
import { actions as companyActions } from '../../../Store/company';

const ManageWork = () => {
  const companyIndex = localStorage.getItem('companyIndex');
  const userIndex = localStorage.getItem('userIndex');
  const { companyEnvironment } = useSelector(state => state.company);
  const dispatch = useDispatch();

  const [setting, setSetting] = useState({
    workStartTime: '',
    workEndTime: '',
    lunchStartTime: '',
    lunchEndTime: '',
    flexibleState: false,
    flexibleWorkStartTime: '',
    flexibleWorkEndTime: '',
    fullDayOffUpperYear: '',
    fullDayOffUnderYear: '',
    morningDayOffStartTime: '',
    morningDayOffEndTime: '',
    afternoonDayOffStartTime: '',
    afternoonDayOffEndTime: ''
  });

  useEffect(() => {
    if (companyIndex) dispatch(companyActions.requestCompany(companyIndex));
    if (companyEnvironment) setSetting(companyEnvironment);
  }, []);

  const onChange = e => {
    const { name, value } = e.target;
    setSetting(state => ({ ...state, [name]: value }));
  };

  const onChecked = e => {
    const { checked } = e.target;
    setSetting(state => ({ ...state, flexibleState: checked }));
  };
  const UpdateCompany = () => {
    const companySetting = {
      userIndex,
      companyIndex,
      workStartTime: setting.workStartTime,
      workEndTime: setting.workEndTime,
      lunchStartTime: setting.lunchStartTime,
      lunchEndTime: setting.lunchEndTime,
      flexibleState: setting.flexibleState,
      flexibleWorkStartTime: setting.flexibleWorkStartTime,
      flexibleWorkEndTime: setting.flexibleWorkEndTime,
      fullDayOffUpperYear: setting.fullDayOffUpperYear,
      fullDayOffUnderYear: setting.fullDayOffUnderYear,
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
      onChecked={onChecked}
      setting={setting}
      UpdateCompany={UpdateCompany}
    />
  );
};

export default ManageWork;
