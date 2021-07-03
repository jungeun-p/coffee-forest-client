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
`;

const ButtonDetail = styled.div``;
const ButtonTitle = styled.div`
  font-size: 14px;
  color: #f8faed;
  font-weight: 600;
`;

export default ButtonCommon;
