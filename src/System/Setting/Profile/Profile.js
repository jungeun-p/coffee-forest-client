import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddThisWeek from '../../../Hooks/addThisWeek';
import ProfilePage from '../../../Pages/Setting/ProfilePage';
import { actions as scheduleActions } from '../../../Store/schedule';

const Profile = () => {
  const dispatch = useDispatch();
  const { date } = useSelector(state => state.schedule);
  const { status } = useSelector(state => state.auth);
  const companyIndex = localStorage.getItem('companyIndex');
  const userIndex = localStorage.getItem('userIndex');
  const thisWeekDate = AddThisWeek();

  useEffect(() => {
    const index = {
      userIndex: userIndex,
      companyIndex: companyIndex,
      startDate: thisWeekDate[0].date
    };
    dispatch(scheduleActions.scheduleWeeklyRequest(index));
  }, [status]);

  return (
    <>
      <ProfilePage date={date} />
    </>
  );
};

export default Profile;
