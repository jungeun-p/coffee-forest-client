import React, { useState } from 'react';
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

  const { companyIndex } = useSelector(state => state.user.userData);

  const onChange = e => {
    const { name, value } = e.target;
    setUser(state => ({ ...state, [name]: value }));
  };

  const onClick = () => {
    if ((user.email && user.password) === '') {
      alert('모두 기입 바람');
    } else {
      const data = {
        email: user.email,
        password: user.password
      };
      dispatch(actions.loginRequest(data));
      if (companyIndex === '') {
        alert('회사를 등록하거나, 등록된 회사를 찾아 신청하세요.');
        history.push('/enroll');
      } else {
        alert('로그인 성공');
        history.push('/mypage');
      }
    }
  };
  return <LoginBody user={user} onChange={onChange} onClick={onClick} />;
};

export default Login;
