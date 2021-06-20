import React from 'react';
//import Login from "../../System/User/Login";
import styled from 'styled-components';
import ButtonCommon from '../../Components/Button';

const LoginBody = ({ user, onChange, onClick }) => {
  return (
    <LoginForm>
      <input
        name="email"
        value={user.email}
        placeholder="email"
        onChange={onChange}
      />
      <input
        name="password"
        value={user.password}
        type="password"
        placeholder="password"
        onChange={onChange}
      />
      <ButtonCommon title={'로그인'} onClick={onClick} />
    </LoginForm>
  );
};

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default LoginBody;
