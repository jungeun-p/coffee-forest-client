import React, { useState } from 'react';
import LoginBody from '../../Pages/Login/LoginBody';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { LOCAL_HOST } from '../../Lib/constant';

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const onChange = e => {
    const { name, value } = e.target;
    setUser(state => ({ ...state, [name]: value }));
  };

  const onClick = () => {
    if ((user.email && user.password) === '') {
      alert('모두 기입 바람');
    } else {
      axios
        .post(
          `${LOCAL_HOST}users/sign-in`,
          {
            email: user.email,
            password: user.password
          },
          { 'Content-Type': 'application/json' }
        )
        .then(response => {
          alert('어서오세요!');
          history.push({
            pathname: '/mypage',
            state: {
              data: response.data
            }
          });
        })
        .catch(error => {
          console.log(error.response.data);
        });
    }
  };
  return <LoginBody user={user} onChange={onChange} onClick={onClick} />;
};

export default Login;
