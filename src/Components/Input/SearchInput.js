import React, { useState } from 'react';
import { AutoComplete } from 'antd';
import styled from 'styled-components';

const SearchInput = ({ options }) => {
  const [result, setResult] = useState([]);

  const handleSearch = inputValue => {
    let res = [];
    if (!inputValue) {
      res = [];
    } else {
      res = options.filter(item => matchName(item.value, inputValue) === true);
    }
    console.log('setResult', res);
    if (res.length > 0) {
      setResult([...result, res]);
    }
  };
  const matchName = (name, keyword) => {
    if (name.toUpperCase().indexOf(keyword.toUpperCase()) !== -1) {
      return true;
    } else {
      return false;
    }
  };

  const onSelect = () => {
    alert('hi');
  };

  return (
    <>
      <SearchAutoComplete
        // placeholder="input here"
        options={options}
        onSearch={handleSearch}
        // placeholder="try to type `b`"
        filterOption={(inputValue, option) =>
          option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
        }
      ></SearchAutoComplete>
      <Options>
        {result.map((item, index) => (
          <div className="option" key={index} onClick={onSelect}>
            {item.value}
          </div>
        ))}
      </Options>
    </>
  );
};

const SearchAutoComplete = styled(AutoComplete)`
  .ant-select-selection-search-input {
    width: 100%;
    height: 58px;
    border: none;
    border-radius: 10px;
    background-color: #f8faed;
    font-size: inherit;
    text-align: left;
    outline: none;
    color: #232323;
    font-size: 14px;
    font-weight: 700;
    padding: 12px 0 8px 12px;
  }
`;

const Options = styled.div`
  width: 100%;
  height: 100px;
  background-color: blueviolet;
  color: white;
  .option {
    color: white;
  }
`;

export default SearchInput;
