import React, { useState } from 'react';
import styled from 'styled-components';

const FormSelect = () => {
  const [view, setView] = useState(false);
  const selectView = () => {
    setView(!view ? true : false);
  };
  const [value, setValue] = useState();
  console.log(value);

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
  position: absolute;
  width: 30vw;
  z-index: 2;
  border-radius: 10px;
  background-color: #f8faed;
  padding: 12px 12px 12px 12px;
  .default {
    font-size: 14px;
    color: #1ca953;
    font-weight: 700;
  }
  .value {
    line-height: 25px;
    font-weight: 700;
  }
`;

const Select = styled.div`
  display: ${props => (props.view ? '' : 'none')};
  background-color: #f8faed;
  font-weight: 700;
  .selectList {
    padding-top: 20px;
  }
`;

export default FormSelect;
