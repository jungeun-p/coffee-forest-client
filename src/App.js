import './App.css';
import React, { useEffect } from 'react';
import MainRouter from './Routes/MainRouter';
import { getAccessToken, setRefreshToken } from './Hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie/es6';
import AddThisWeek from './Hooks/addThisWeek';
import { actions as scheduleActions } from './Store/schedule';

function App() {
  const { authenticated } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const thisWeekDate = AddThisWeek();
  console.log(authenticated);
  useEffect(() => {
    if (!authenticated) {
      const index = {
        userIndex: localStorage.getItem('userIndex'),
        companyIndex: localStorage.getItem('companyIndex'),
        startDate: thisWeekDate[0].date
      };
      if (index) {
        dispatch(scheduleActions.scheduleInfoRequest(index));
      }
      const token = getAccessToken();
      setRefreshToken(token);
    }
  }, [authenticated]);
  return (
    <>
      <MainRouter />
    </>
  );
}

export default App;
