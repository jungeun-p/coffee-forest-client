import React, { useCallback, useEffect, useState } from 'react';
import LoginBody from '../../Pages/Login/LoginBody';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Store/user';
import Cookies from 'universal-cookie/es6';
// import { actions as scheduleActions } from '../../Store/schedule';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const userIndex = localStorage.getItem('userIndex');
  const companyIndex = localStorage.getItem('companyIndex');

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { userData, errorMessage } = useSelector(state => state.user);
  const { enrollEmployee, enrollCompany } = useSelector(state => state.enroll);

  const onChange = e => {
    const { name, value } = e.target;
    setUser(state => ({ ...state, [name]: value }));
  };

  const onClick = () => {
    if ((user.email && user.password) === '') {
      alert('로그인 정보를 다시 확인해주세요');
    } else {
      const data = {
        email: user.email,
        password: user.password
      };
      dispatch(actions.loginRequest(data));
    }
  };

  useEffect(() => {
    const token = cookies.get('refreshToken');
    console.log(userData, enrollCompany);
    // if (token && userIndex) {
    //   // admin 계정의 로그인 했을 때
    //   if (
    //     user.email === 'admin@naver.com' ||
    //     userData.email === 'admin@naver.com'
    //   ) {
    //     history.push('/admin');
    //     // 회사 등록 or 사원 등록 후 초기화
    //   } else if (companyIndex === '0') {
    //     alert('회사를 등록하거나, 등록된 회사를 찾아 신청하세요.');
    //     history.push('/enroll');
    //   } else if (
    //     userData.companyApplicantStatus === 'WAIT' ||
    //     userData.workApplicantStatus === 'WAITING'
    //   ) {
    //     history.push('/mypage');
    //   }
    // }

    if (userData.userIndex) {
      if (
        user.email === 'admin@naver.com' ||
        userData.email === 'admin@naver.com'
      ) {
        history.push('/admin');
      } else if (userData.companyIndex !== 0) {
        history.push('/mypage');
      } else if (userData.companyApplicantStatus === 'WAIT') {
        history.push('/mypage');
      } else if (userData.workApplicantStatus === 'WAITING') {
        history.push('/mypage');
      } else if (
        enrollCompany.companyApplicantStatus === 'WAIT' ||
        enrollEmployee.workStatus === 'WAITING'
      ) {
        window.location.replace('/');
      } else if (userData.companyIndex === 0) {
        alert('회사를 등록하거나, 등록된 회사를 찾아 신청하세요.');
        history.push('/enroll');
      }
    } else {
      history.push('/mypage');
    }
  }, [userData]);

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
