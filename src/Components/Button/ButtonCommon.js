import React from 'react';
import styled from 'styled-components';

// 기본 버튼
const ButtonCommon = ({ title, onClick }) => {
  return (
    <ButtonArticle onClick={onClick}>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonArticle>
  );
};

const ButtonArticle = styled.button`
  /* width: 320px; */
  overflow: hidden;
  background-color: #1ca953;
  height: 58px;
  border-radius: 10px;
  padding: 0 15px 0 15px;
  display: inline-flex;
  box-sizing: 14px;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  border: none;
  outline: none;
  margin-bottom: 40px;
  cursor: pointer;
`;

const ButtonTitle = styled.div`
  font-size: 14px;
  color: #f8faed;
  font-weight: 600;
`;

// 작은 버튼

const ButtonCommonS = ({ title, onClick }) => {
  return (
    <ButtonArticleS onClick={onClick}>
      <ButtonTitleS>{title}</ButtonTitleS>
    </ButtonArticleS>
  );
};

const ButtonArticleS = styled.div`
  width: 60px;
  height: 30px;
  background: #1ca953;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 0 10px;
  cursor: pointer;
`;
const ButtonTitleS = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  color: #ffffff;
  text-align: center;
`;

export { ButtonCommonS, ButtonCommon };
