import React from "react";
import Login from "../../System/User/Login";
import styled from "styled-components";

const LoginContainer = () => {
  return (
    <Wrap>
      Login 👋
      <Login />
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
