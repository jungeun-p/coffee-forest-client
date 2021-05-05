import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainContainer = () => {
  return (
    <Menu>
      <p>menu</p>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
      <Link to="/admin">Admin</Link>
    </Menu>
  );
};

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MainContainer;
