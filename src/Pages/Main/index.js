import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainContainer = () => {
  return (
    <Menu>
      <h4>coffee-forest-client</h4>
      {/* <Link to="/login">Login</Link> */}
      {/* <Link to="/signup">Signup</Link> */}
      <Link to="/admin">개발자 관리</Link>
      <Link to="/mypage">마이 페이지</Link>
    </Menu>
  );
};

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MainContainer;
