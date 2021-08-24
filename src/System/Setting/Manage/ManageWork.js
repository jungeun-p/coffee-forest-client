import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ManageWorkPage from '../../../Pages/Setting/ManageWorkPage';
import { actions as companyActions } from '../../../Store/company';

const ManageWork = () => {
  const { companyIndex, userIndex } = useSelector(state => state.user.userData);
  const { companyEnvironment } = useSelector(state => state.company);
  const dispatch = useDispatch();

  const LoadCompanySetting = useCallback(() => {
    dispatch(companyActions.requestCompany(companyIndex));
  }, [companyIndex, dispatch]);

  useEffect(() => {
    LoadCompanySetting();
  }, [LoadCompanySetting]);

  const [setting, setSetting] = useState({
    workStartTime: companyEnvironment?.workStartTime,
    workEndTime: companyEnvironment?.workEndTime,
    lunchStartTime: companyEnvironment?.lunchStartTime,
    lunchEndTime: companyEnvironment?.lunchEndTime,
    flexibleState: companyEnvironment?.flexibleState,
    flexibleWorkStartTime: companyEnvironment?.flexibleWorkStartTime,
    flexibleWorkEndTime: companyEnvironment?.flexibleWorkEndTime,
    fullDayOffUpperYear: companyEnvironment?.fullDayOffUpperYear,
    fullDayOffUnderYear: companyEnvironment?.fullDayOffUnderYear,
    morningDayOffStartTime: companyEnvironment?.morningDayOffStartTime,
    morningDayOffEndTime: companyEnvironment?.morningDayOffEndTime,
    afternoonDayOffStartTime: companyEnvironment?.afternoonDayOffStartTime,
    afternoonDayOffEndTime: companyEnvironment?.afternoonDayOffEndTime
  });
  console.log(setting);

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
      setting={setting}
      UpdateCompany={UpdateCompany}
    />
  );
};

export default ManageWork;
