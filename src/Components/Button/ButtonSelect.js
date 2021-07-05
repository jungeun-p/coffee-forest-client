import React from 'react';
import styled from 'styled-components';

const ButtonSelect = ({ onClick, title, selected }) => {
  return (
    <ButtonArticle selected={selected} onClick={onClick}>
      <ButtonTitle selected={selected}>{title}</ButtonTitle>
    </ButtonArticle>
  );
};

const ButtonArticle = styled.div`
  width: 50vw;
  height: 50px;
  background-color: ${props => (props.selected ? ' #1ca953' : '#FFFFFF')};
  border-radius: 14px;
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height */
  text-align: center;
  /* bean white */
  cursor: pointer;
`;

const ButtonTitle = styled.p`
  color: ${props => (props.selected ? '#ffffff' : '#D9DBCE')};
  background-color: ${props => (props.selected ? '#1ca953' : '#FFFFFF')};
`;

export default ButtonSelect;
