import React from 'react';
import styled, { css } from 'styled-components';
import { useLocation, Link } from 'react-router-dom';
import { categories } from '../../Lib/CategoryNavName';

const HeaderNav = () => {
  const pathName = useLocation().pathname;
  console.log(pathName);
  return (
    <HeaderWrapper>
      <div>🧩</div>
      <CategoryWrapper>
        {categories.map((cate, index) => (
          <Category
            key={index}
            to={cate.router}
            selected={pathName === cate.router ? true : false}
          >
            <CategoryName>{cate.name}</CategoryName>
            <CategoryBar selected={pathName === cate.router ? true : false} />
          </Category>
        ))}
      </CategoryWrapper>
      <div>👩🏻‍💻</div>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 35px;
`;
const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Category = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => (props.selected ? '#000000' : '#949494')};
  text-decoration: none;
`;

const CategoryName = styled.div`
  border: none;
  text-decoration: none;
  background-color: transparent;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  padding: 0 10px 0 10px;
  /* 
  ${props =>
    props.active &&
    css`
      color: #000000;
    `} */
`;
const CategoryBar = styled.div`
  width: 70px;
  height: 3px;
  margin-top: 6px;
  display: ${props => (props.selected ? '' : 'none')};
  background-color: ${props => (props.selected ? '#000000' : '#949494')};
`;

export default HeaderNav;
