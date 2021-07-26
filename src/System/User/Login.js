import React, { useCallback, useState } from 'react';
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

  const { companyIndex, userTokenInfo } = useSelector(state => state.user);

  const onChange = e => {
    const { name, value } = e.target;
    setUser(state => ({ ...state, [name]: value }));
  };

  const onClick = useCallback(() => {
    if ((user.email && user.password) === '') {
      alert('모두 기입 바람');
    } else {
      const data = {
        email: user.email,
        password: user.password
      };
      dispatch(actions.loginRequest(data));
      if (user.email === 'admin@naver.com') {
        alert('admin');
        history.push('/admin');
      } else if (!companyIndex) {
        alert('회사를 등록하거나, 등록된 회사를 찾아 신청하세요.');
        history.push('/enroll');
      } else {
        alert('로그인 성공');
        history.push('/mypage');
      }
    }
  }, [companyIndex, dispatch, history, user.email, user.password]);

  return <LoginBody user={user} onChange={onChange} onClick={onClick} />;
};

export default Login;
