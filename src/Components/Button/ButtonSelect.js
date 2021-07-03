import React from 'react';
import styled from 'styled-components';

const ButtonSelect = ({ onClick, title }) => {
  return (
    <ButtonArticle onClick={onClick}>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonArticle>
  );
};

const ButtonArticle = styled.div`
  width: 160px;
  height: 50px;
  background: #1ca953;
  border-radius: 14px;
  font-weight: bold;
  color: #ffffff;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height */
  text-align: center;
  /* bean white */
  cursor: pointer;
`;

const ButtonTitle = styled.p``;

export default ButtonSelect;
