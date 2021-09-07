import React from 'react';
import styled from 'styled-components';

const InputSmall = ({ name, value, placeholder, onChange }) => {
  return (
    <Input
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

const Input = styled.input`
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: #f8faed;
  font-size: 10px;
  color: #b7b7b7;
  padding: 5px 10px;
  /* margin-top: 15px; */
`;

export default InputSmall;
