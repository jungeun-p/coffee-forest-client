import React from "react";
import Login from "../../System/User/Login";
import styled from "styled-components";

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
        name="pw"
        value={user.pw}
        type="password"
        placeholder="pw"
        onChange={onChange}
      />
      <button onClick={onClick}>로그인</button>
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
