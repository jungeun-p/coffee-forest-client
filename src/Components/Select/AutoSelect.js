import React from 'react';
import styled from 'styled-components';
import { InputCommon } from '../Input';

const AutoComplete = ({ title, view, enrollCompany, onChange, name }) => {
  return (
    <SelectList>
      <InputCommon placeholder={title} onChange={onChange} name={name} />
      <OptionList view={view} enrollCompany={enrollCompany} />
    </SelectList>
  );
};

const SelectList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionList = ({ view, enrollCompany }) => {
  return (
    <OptionUl view={view ? true : false}>
      {enrollCompany &&
        enrollCompany.map((item, index) => (
          <li key={index}>{item.companyName}</li>
        ))}
    </OptionUl>
  );
};

const OptionUl = styled.ul`
  display: ${props => (props.view ? 'inline' : 'none')};
`;

export default AutoComplete;
