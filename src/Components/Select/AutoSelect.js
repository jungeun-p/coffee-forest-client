import React from 'react';
import styled from 'styled-components';
import { InputCommon } from '../Input';

const AutoComplete = ({ title, view, companyList, onChange, name }) => {
  return (
    <SelectList>
      <InputCommon placeholder={title} onChange={onChange} name={name} />
      <OptionList view={view} companyList={companyList} />
    </SelectList>
  );
};

const SelectList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionList = ({ view, companyList }) => {
  return (
    <OptionUl view={view ? true : false}>
      {companyList &&
        companyList.map((item, index) => (
          <li key={index}>{item.companyName}</li>
        ))}
    </OptionUl>
  );
};

const OptionUl = styled.ul`
  display: ${props => (props.view ? 'inline' : 'none')};
`;

export default AutoComplete;
