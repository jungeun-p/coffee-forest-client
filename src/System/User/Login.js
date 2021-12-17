import React, { useEffect, useState } from 'react';
import LoginBody from '../../Pages/Login/LoginBody';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Store/user';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

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

  // 로그인
  const onClick = () => {
    if ((user.email && user.password) === '') {
      alert('로그인 정보를 다시 확인해주세요');
    } else {
      // 로그인 했을 때 localStorage에서 logout 삭제
      window.localStorage.removeItem('logout');
      const data = {
        email: user.email,
        password: user.password
      };
      dispatch(actions.loginRequest(data));
    }
  };

  useEffect(() => {
    const userIndex = localStorage.getItem('userIndex');
    const companyIndex = localStorage.getItem('companyIndex');
    // 로그인 성공 후 userIndex storage 저장 성공
    if (userIndex) {
      // 1. 소속된 회사가 있을 때
      if (companyIndex !== '0') {
        history.push('/mypage');
        // 2. 소속된 회사가 없을 때
      } else {
        // 2-1. 커피숲 관리자 계정일 때
        if (userData.email === 'admin@naver.com') {
          history.push('/admin');
          // 2-2. 회원가입 후 회사나 사원 동륵이 되어있지 않을 때.
        } else if (
          userData.companyApplicantStatus === 'UNKNOWN' &&
          userData.workApplicantStatus === 'UNKNOWN'
        ) {
          history.push('/enroll');
          // 2-3. 회사 등록 및 사원 등록 후 대기중일 경우
        } else if (
          userData.companyApplicantStatus === 'WAIT' ||
          userData.workApplicantStatus === 'WAITING'
        ) {
          history.push('/mypage');
          // 2-4. 회사 등록 및 사원 등록 직후
        } else if (
          enrollCompany.companyApplicantStatus === 'WAIT' ||
          enrollEmployee.workStatus === 'WAITING'
        ) {
          history.push('/');
        } else {
          history.push('/');
        }
      }
      // 1-1. 로그인 실패
    } else {
      history.push('/');
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
