// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

const InputCommon = ({ label, name, value, onChange, onBlur }) => {
  return (
    <InputWrap>
      <InputOutline>
        <Label>{label}</Label>
        <Input onChange={onChange} name={name} value={value} onBlur={onBlur} />
      </InputOutline>
    </InputWrap>
  );
};

const InputWrap = styled.div`
  height: ${props => (props.height ? props.height : '58px')};
  border-radius: 10px;
  background-color: #f3f3f3;
  margin-top: 18px;
  display: flex;
  align-items: center;
  font-size: 12px;
  box-sizing: border-box;
  font-weight: 500;
  position: relative;
`;

const InputOutline = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 22px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;
  /* flex-grow: 1;
  flex-shrink: 1; */
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
  background-color: #f3f3f3;
  font-size: inherit;
  text-align: left;
  outline: none;
`;

const Label = styled.label`
  top: 50%;
  left: 0px;
  color: #b7b7b7;
  width: 30%;
  font-size: 12px;
  transform: translateY(-50%);
  font-weight: 600;
`;

export default InputCommon;