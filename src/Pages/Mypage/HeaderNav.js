import React from 'react';
import styled, { css } from 'styled-components';
import { useLocation, Link } from 'react-router-dom';
import { categories } from '../../Lib/CategoryNavName';

const HeaderNav = () => {
  const pathName = useLocation().pathname;
  console.log(pathName);
  return (
    <HeaderWrapper>
      <div>logo</div>
      <CategoryWrapper>
        {categories.map((cate, index) => (
          <CategoryName
            key={index}
            to={cate.router}
            selected={pathName === cate.router ? true : false}
          >
            {cate.name}
          </CategoryName>
        ))}
      </CategoryWrapper>
      <div>profile</div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 20px;
`;
const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const CategoryName = styled(Link)`
  &:active {
    text-decoration: none;
    color: #949494;
  }
  &:hover {
    text-decoration: none;
  }
  color: ${props => (props.selected ? '#000000' : '#949494')};
  border: none;
  text-decoration: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 600;
  padding: 0 22px 0 22px;
  cursor: pointer;
  /* 
  ${props =>
    props.active &&
    css`
      color: #000000;
    `} */
`;

export default HeaderNav;
