import React, { useState } from 'react';
import LoginBody from '../../Pages/Login/LoginBody';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { API_HOST } from '../../Lib/constant';

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
    pw: ''
  });

  const onChange = e => {
    const { name, value } = e.target;
    setUser(state => ({ ...state, [name]: value }));
  };

  const onClick = async () => {
    if ((user.email && user.pw) === '') {
      alert('모두 기입 바람');
    } else {
      try {
        const res = await axios.post(`${API_HOST}user/auth`, {
          email: user.email,
          pw: user.pw
        });
        console.log(res);
      } catch (e) {
        console.log(e);
      }
      alert('success!');
      history.push('/mypage');
    }
  };
  return <LoginBody user={user} onChange={onChange} onClick={onClick} />;
};

export default Login;
