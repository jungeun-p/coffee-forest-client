import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { TitleB } from '../../Components/Common';
import { categoriesMypage } from '../../Lib/CategoryMypage';

const TabMenu = () => {
  const { position } = useSelector(state => state.user.userData);
  return (
    <div>
      <CategoryWrap>
        <TitleB>계정 설정</TitleB>
        <Category to={'/mypage/manage/edit'}>
          <CategoryName>회원정보 수정</CategoryName>
        </Category>
      </CategoryWrap>
      {position === 'ADMIN' && (
        <CategoryWrap>
          <TitleB>근태 관리</TitleB>
          {categoriesMypage.map((cate, index) => (
            <Category key={cate.index} to={cate.router}>
              <CategoryName>{cate.name}</CategoryName>
            </Category>
          ))}
        </CategoryWrap>
      )}
    </div>
  );
};

const CategoryWrap = styled.div`
  margin-top: 35px;
  .name {
    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
    /* color: #f8faed; */
    margin-top: 15px;
    cursor: pointer;
    .name:visited {
      color: black;
    }
  }
`;

const Category = styled(Link)`
  text-decoration: none;
`;

const CategoryName = styled.div`
  border: none;
  text-decoration: none;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  /* color: #f8faed; */
  margin-top: 15px;
  cursor: pointer;
`;
export default TabMenu;
