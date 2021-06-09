import React from "react";
import Login from "../../System/User/Login";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LoginContainer = () => {
  return (
    <Wrap>
      Login 👋
      <Login />
      <Link to="/signup">회원가입</Link>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default LoginContainer;
