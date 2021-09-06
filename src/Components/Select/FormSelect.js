import React, { useState } from 'react';
import styled from 'styled-components';

const FormSelect = () => {
  const [view, setView] = useState(false);
  const selectView = () => {
    setView(!view ? true : false);
  };
  const [value, setValue] = useState();

  const list = [
    {
      index: 1,
      name: 'apple 🍎',
      value: 'apple'
    },
    {
      index: 2,
      name: 'banana 🍌',
      value: 'banana'
    },
    {
      index: 3,
      name: 'kiwi 🥝',
      value: 'kiwi'
    },
    {
      index: 4,
      name: 'oragne 🍊',
      value: 'orange'
    }
  ];
  return (
    <div>
      <SelectForm onClick={selectView}>
        <div className="default">과일 선택하기</div>
        <div className="value">{value || '선택하세요'}</div>
        <Select view={view}>
          {list.map(fruits => (
            <div
              className="selectList"
              onClick={() => setValue(fruits.value)}
              key={fruits.index}
            >
              {fruits.name}
            </div>
          ))}
        </Select>
      </SelectForm>
    </div>
  );
};

const SelectForm = styled.div`
  width: 20vw;
  border-radius: 10px;
  background-color: #f8faed;
  padding: 12px 0px 12px 12px;
  top: 20px;
  margin-top: 15px;
  .default {
    font-size: 10px;
    color: #1ca953;
    font-weight: 600;
  }
  .value {
    font-size: 14px;
    line-height: 25px;
    font-weight: 600;
  }
`;

const Select = styled.div`
  display: ${props => (props.view ? 'block' : 'none')};
  background-color: #f8faed;
  font-weight: 700;
  max-height: 80px;
  overflow-y: scroll;
  -webkit-font-smoothing: antialiased;
  .selectList {
    padding: 10px 0px;
    font-size: 14px;
    /* position: fixed;
    z-index: 5; */
  }
`;

export default FormSelect;
