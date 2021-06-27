import React from 'react';
import styled from 'styled-components';

const ButtonCommon = ({ title, onClick }) => {
  return (
    <ButtonArticle onClick={onClick}>
      <ButtonDetail>
        <ButtonTitle>{title}</ButtonTitle>
      </ButtonDetail>
    </ButtonArticle>
  );
};

const ButtonArticle = styled.button`
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
`;

const ButtonDetail = styled.div``;
const ButtonTitle = styled.div`
  font-size: 14px;
  color: #f8faed;
  font-weight: 500;
`;

export default ButtonCommon;
