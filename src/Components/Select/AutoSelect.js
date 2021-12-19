import React from 'react';
import styled from 'styled-components';
import { InputCommon } from '../Input';

const AutoComplete = ({
  title,
  view,
  employee,
  companyList,
  onChange,
  name,
  selectCompany
}) => {
  return (
    <SelectList>
      <InputCommon
        placeholder={title}
        onChange={onChange}
        name={name}
        value={employee.companyName}
      />
      <OptionList
        view={view}
        companyList={companyList}
        selectCompany={selectCompany}
      />
    </SelectList>
  );
};

const SelectList = styled.div`
  display: flex;
  flex-direction: column;
`;

const OptionList = ({ view, companyList, selectCompany }) => {
  return (
    <OptionUl view={view ? true : false}>
      {companyList &&
        companyList.map((item, index) => (
          <OptionArticle
            key={index}
            onClick={() => selectCompany(item.companyIndex, item.companyName)}
          >
            <div className="title">
              <div className="name">{item.companyName}</div>
              <div className="description">{item.ownerName}</div>
            </div>
            <div className="description">{item.companyAddress}</div>
          </OptionArticle>
        ))}
    </OptionUl>
  );
};

const OptionUl = styled.div`
  margin-top: 10px;
  display: ${props => (props.view ? 'inline' : 'none')};
`;

const OptionArticle = styled.div`
  padding: 12px;
  transition: background-color 0.2s;
  cursor: pointer;
  .title {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    /* margin: 15px 0 3px 0; */
  }
  .name {
    font-size: 15px;
    font-weight: 700;
    margin-right: 5px;
  }
  .description {
    font-size: 12px;
  }
  &:hover {
    background-color: #f3f3f3;
  }
`;

export default AutoComplete;
