import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import ButtonSelect from '../../Components/Button/ButtonSelect';
import EnrollEmployee from '../../Pages/Enroll/EnrollEmployee';
import EnrollOffice from '../../Pages/Enroll/EnrollOffice';
import { actions as enrollActions } from '../../Store/enroll';
import { actions as validActions } from '../../Store/validation';

const Enroll = () => {
  const [office, setOffice] = useState({
    name: '',
    address: '',
    businessNumber: ''
  });
  const [tab, setTab] = useState({ activeId: 0 });

  const userTokenInfo = useSelector(state => state.user.userTokenInfo);
  const { validNumber } = useSelector(state => state.validation);
  const { companyApplicantStatus } = useSelector(
    state => state.enroll.enrollData
  );
  const history = useHistory();
  const dispatch = useDispatch();

  const onChange = e => {
    const { name, value } = e.target;
    setOffice({ ...office, [name]: value });
  };

  useEffect(() => {
    // console.log(userTokenInfo);
    // // console.log(validNumber);
    // console.log(`number:${validNumber}`);
    console.log(companyApplicantStatus);
  }, [validNumber, userTokenInfo, companyApplicantStatus]);

  // 회사 등록 신청 api
  const onClick = useCallback(() => {
    if (office.name && office.address && office.businessNumber !== '') {
      const data = {
        userIndex: userTokenInfo.userIndex,
        name: office.name,
        address: office.address,
        businessNumber: office.businessNumber
      };
      dispatch(enrollActions.enrollRequest(data));
      alert('신청 완료 되었습니다.');
    } else {
      alert('빠짐없이 작성해주세요');
    }
  }, [
    dispatch,
    office.address,
    office.businessNumber,
    office.name,
    userTokenInfo.userIndex
  ]);

  // 사업자 번호 중복 검사 api
  const ValidateBusinessNumber = () => {
    if (office.businessNumber) {
      const inputNumber = {
        params: {
          businessNumber: office.businessNumber
        }
      };
      dispatch(validActions.validateNumber(inputNumber));
    }
  };

  const obj = {
    0: (
      <EnrollOffice
        onChange={onChange}
        onClick={onClick}
        ValidateBusinessNumber={ValidateBusinessNumber}
        validNumber={validNumber}
        companyApplicantStatus={companyApplicantStatus}
      />
    ),
    1: <EnrollEmployee onChange={onChange} onClick={onClick} />
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
