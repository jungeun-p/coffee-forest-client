import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ButtonSelect from '../../Components/Button/ButtonSelect';
import numberFormatter from '../../Hooks/numberFormat';
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
  const [full, setFull] = useState(false);
  const [tab, setTab] = useState({ activeId: 0 });
  const dispatch = useDispatch();
  // const { userIndex } = useSelector(state => state.user.userData);
  const userIndex = localStorage.getItem('userIndex');
  // 양식 불가 : Invalid Business Number Format
  // 가능 번호 : Available
  const { validNumber } = useSelector(state => state.validation);
  // 신청 완료 : WAIT
  // 기본 상태값 : YET
  // 사업자 번호 중복(error) : Already Exists

  const { enrollEmployee, enrollCompany, companyList } = useSelector(
    state => state.enroll
  );

  const onChange = e => {
    const { name, value } = e.target;
    setOffice({ ...office, [name]: value });
  };
  const numberChange = e => {
    const businessNumber = numberFormatter(e.target.value, 'businessNumber');
    setOffice({ ...office, businessNumber: businessNumber });
  };

  const inputFull = () => {
    if (validNumber === 'Available' && office.name && office.address) {
      setFull(true);
    } else {
      setFull(false);
    }
  };

  // 사업자 번호 포맷 검사 api
  const ValidateBusinessNumber = useCallback(() => {
    if (office.businessNumber) {
      const inputNumber = {
        params: {
          businessNumber: office.businessNumber
        }
      };
      dispatch(validActions.validateNumber(inputNumber));
    }
  }, [dispatch, office.businessNumber]);

  // 회사 등록 신청 api
  const applyCompany = () => {
    if (full === true) {
      const data = {
        userIndex,
        name: office.name,
        address: office.address,
        businessNumber: office.businessNumber
      };
      dispatch(enrollActions.enrollRequestCompany(data));
    } else {
      alert('모두 기입해주세요.');
    }
  };

  // 등록된 회사 출력 api
  const LoadCompany = useCallback(() => {
    dispatch(enrollActions.enrollCompanyList());
  }, [office.name]);

  // 사원 신청 api -> 추후 변경하기
  const applyEmployee = () => {
    if (office.name !== '') {
      const data = {
        companyIndex: 2,
        userIndex
      };
      dispatch(enrollActions.enrollRequestEmployee(data));
    }
  };

  useEffect(() => {
    console.log(companyList);
    inputFull();
    if (enrollCompany?.companyApplicantStatus === 'WAIT') {
      alert('등록 완료');
      window.location.replace('/');
    } else if (enrollEmployee?.workStatus === 'WAITING') {
      alert('신청 완료');
      window.location.replace('/');
    }
  }, [validNumber, office, full, enrollCompany, enrollEmployee]);

  const obj = {
    0: (
      <EnrollOffice
        office={office}
        onChange={onChange}
        numberChange={numberChange}
        applyCompany={applyCompany}
        ValidateBusinessNumber={ValidateBusinessNumber}
        validNumber={validNumber}
        companyApplicantStatus={enrollCompany?.companyApplicantStatus}
      />
    ),
    1: (
      <EnrollEmployee
        office={office}
        companyList={companyList}
        LoadCompany={LoadCompany}
        onChange={onChange}
        applyEmployee={applyEmployee}
      />
    )
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
