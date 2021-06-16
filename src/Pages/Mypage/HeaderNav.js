import React from 'react';
import styled, { css } from 'styled-components';
import { useLocation, Link } from 'react-router-dom';
import { categories } from '../../Lib/CategoryNavName';

const HeaderNav = () => {
  const pathName = useLocation().pathname;
  console.log(pathName);
  return (
    <div>
      {categories.map((cate, index) => (
        <CategoryName
          key={index}
          name={cate.name}
          to={cate.router}
          active={pathName === cate.router ? true : false}
        >
          {cate.name}/
        </CategoryName>
      ))}
    </div>
  );
};

const CategoryName = styled(Link)`
  &:active {
    text-decoration: none;
    color: #949494;
  }
  &:hover {
    text-decoration: none;
  }
  color: #949494;
  border: none;
  text-decoration: none;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      color: #000000;
    `}
`;

export default HeaderNav;
