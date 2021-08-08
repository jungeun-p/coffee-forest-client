import React, { useCallback, useEffect, useState } from 'react';
import LoginBody from '../../Pages/Login/LoginBody';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Store/user';
// import { actions as scheduleActions } from '../../Store/schedule';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { userData, errorMessage } = useSelector(state => state.user);
  const onChange = e => {
    const { name, value } = e.target;
    setUser(state => ({ ...state, [name]: value }));
  };

  const onClick = useCallback(() => {
    if ((user.email && user.password) === '') {
      alert('로그인 정보를 다시 확인해주세요');
    } else {
      const data = {
        email: user.email,
        password: user.password
      };
      dispatch(actions.loginRequest(data));
    }
  }, [dispatch, user.email, user.password]);

  useEffect(() => {
    if (userData.userIndex) {
      if (user.email === 'admin@naver.com') {
        history.push('/admin');
      } else if (userData.companyIndex !== 0) {
        alert('로그인 성공');
        history.push('/mypage');
      } else if (userData.companyApplicantStatus === 'WAIT') {
        history.push('/waiting');
      } else if (userData.workApplicantStatus === 'WAITING') {
        history.push('/waiting');
      } else {
        alert('회사를 등록하거나, 등록된 회사를 찾아 신청하세요.');
        history.push('/enroll');
      }
    }
  });

  return (
    <LoginBody
      user={user}
      onChange={onChange}
      onClick={onClick}
      errorMessage={errorMessage}
    />
  );
};

export default Login;
