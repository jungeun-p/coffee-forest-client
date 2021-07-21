import React, { useState } from 'react';
import styled from 'styled-components';
import ButtonSelect from '../../Components/Button/ButtonSelect';
import EnrollEmployee from '../../Pages/Enroll/EnrollEmployee';
import EnrollOffice from '../../Pages/Enroll/EnrollOffice';

const Enroll = () => {
  const [office, setOffice] = useState({
    officeName: '',
    officeAddress: '',
    businessNumber: ''
  });
  const [tab, setTab] = useState({ activeId: 0 });

  const onChange = e => {
    const { name, value } = e.target;
    setOffice({ ...office, [name]: value });
  };

  const onClick = () => {
    //enroll-saga
  };

  const obj = {
    0: <EnrollOffice office={office} onChange={onChange} onClick={onClick} />,
    1: <EnrollEmployee office={office} onChange={onChange} onClick={onClick} />
  };
  const clickHandler = id => {
    setTab({ activeId: id });
  };
  return (
    <>
      <CategoryWrap>
        <ButtonSelect
          title="회사 등록 🏢"
          onClick={() => clickHandler(0)}
          selected={tab.activeId === 0}
        />
        <ButtonSelect
          title="사원 등록 👤"
          onClick={() => clickHandler(1)}
          selected={tab.activeId === 1}
        />
      </CategoryWrap>
      {obj[tab.activeId]}
    </>
  );
};

const CategoryWrap = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;

export default Enroll;
