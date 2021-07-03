import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ContainerRoot } from '../../Components/Common';
import Login from '../../Pages/Login';

const MainContainer = () => {
  return (
    <ContainerRoot>
      <Menu>
        {/* <Link to="/login">Login</Link> */}
        {/* <Link to="/signup">Signup</Link> */}
        {/* <Link to="/admin">개발자 관리</Link>
        <Link to="/mypage">마이 페이지</Link> */}
        <Login />
      </Menu>
    </ContainerRoot>
  );
};

const Menu = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MainContainer;
