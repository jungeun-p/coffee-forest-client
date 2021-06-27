import React, { useEffect, useState } from 'react';
import LoginBody from '../../Pages/Login/LoginBody';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { LOCAL_HOST } from '../../Lib/constant';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../Store/user';
import { actions as scheduleActions } from '../../Store/schedule';

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const { companyIndex } = useSelector(state => state.user.userInfo);
  const scheduleData = useSelector(state => state.user.userInfo);

  useEffect(() => {
    if (companyIndex) {
      alert('로그인 성공');
      dispatch(scheduleActions.scheduleInfo(scheduleData));
      history.push('/mypage');
    }
  }, [companyIndex, dispatch]);

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
      // axios
      //   .post(`${LOCAL_HOST}users/sign-in`, data)
      //   .then(response => {
      //     alert('어서오세요!');
      //     history.push({
      //       pathname: '/mypage',
      //       state: {
      //         data: response.data
      //       }
      //     });
      //   })
      //   .catch(error => {
      //     console.log(error.response.data);
      //   });
    }
  };
  return <LoginBody user={user} onChange={onChange} onClick={onClick} />;
};

export default Login;
