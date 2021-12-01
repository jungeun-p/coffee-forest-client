import React from 'react';
import styled from 'styled-components';

const InputTime = ({ name, value, onChange, placeholder }) => {
  return (
    <Input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoComplete="off"
    />
  );
};

const Input = styled.input`
  border: none;
  width: 80px;
  height: 20px;
  background: #f3f3f3;
  border-radius: 5px;
  font-size: 14px;
  text-align: center;
  padding: 0;
  margin-top: 10px;
`;

export default InputTime;
