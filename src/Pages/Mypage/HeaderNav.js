import React from 'react';
import styled, { css } from 'styled-components';
import { useLocation, Link } from 'react-router-dom';
import { categories } from '../../Lib/CategoryNavName';
import mainLogo from '../../assets/Img/logo/mainLogo.png';
// import basicProfile from '../../assets/Img/profile/basicProfile.png';

const HeaderNav = () => {
  const pathName = useLocation().pathname;
  return (
    <HeaderWrapper>
      {/* <div>🧩</div> */}
      <Logo className="logo" src={mainLogo} />
      <CategoryWrapper>
        {categories.map((cate, index) => (
          <Category
            key={index}
            to={cate.router}
            selected={pathName === cate.router ? true : false}
          >
            <CategoryName>{cate.name}</CategoryName>
            {/* <CategoryBar selected={pathName === cate.router ? true : false} /> */}
          </Category>
        ))}
      </CategoryWrapper>
      <Logo className="logo" src={mainLogo} />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 10vh;
  width: 100vw;
  background-color: #ffffff;
  z-index: 3;
  position: fixed;
  bottom: 0;
  border-top: 1px solid blakc;
  .logo {
    visibility: hidden;
  }
  @media all and (min-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: sticky;
    left: 0;
    width: 100px;
    z-index: 3;
    box-shadow: 4px 16px 36px rgba(0, 0, 0, 0.05);
    height: 100vh;
    .logo {
      visibility: visible;
    }
  }
`;

const Logo = styled.img`
  height: 30px;
  padding: 50px 0 60px 0;
`;

const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media all and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Category = styled(Link)`
  display: flex;
  flex-direction: column;
  color: ${props => (props.selected ? '#000000' : '#949494')};
  text-decoration: none;
`;

const CategoryName = styled.div`
  border: none;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  padding: 0 40px;
  cursor: pointer;
  @media all and (min-width: 768px) {
    padding: 0 0 50px 0;
  }
  /* padding: 0 10px 0 10px; */
  /* 
  ${props =>
    props.active &&
    css`
      color: #000000;
    `} */
`;
// const CategoryBar = styled.div`
//   width: 70px;
//   height: 3px;
//   margin-top: 6px;
//   display: ${props => (props.selected ? '' : 'none')};
//   background-color: ${props => (props.selected ? '#000000' : '#949494')};
// `;

export default HeaderNav;
