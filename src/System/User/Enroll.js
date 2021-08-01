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
  const [full, setFull] = useState(false);
  const [tab, setTab] = useState({ activeId: 0 });

  const userTokenInfo = useSelector(state => state.user.userTokenInfo);

  // 양식 불가 : Invalid Business Number Format
  // 가능 번호 : Available
  const { validNumber } = useSelector(state => state.validation);

  // 신청 완료 : WAIT
  // 기본 상태값 : YET
  // 사업자 번호 중복(error) : Already Exists
  const { enrollData, enrollCompany } = useSelector(state => state.enroll);

  const history = useHistory();
  const dispatch = useDispatch();

  const onChange = e => {
    const { name, value } = e.target;
    setOffice({ ...office, [name]: value });
  };

  const inputFull = useCallback(() => {
    if (
      validNumber === 'Available' &&
      // enrollData?.companyApplicantStatus === 'WAIT' &&
      office.name !== '' &&
      office.address !== '' &&
      office.businessNumber !== ''
    ) {
      setFull(true);
    } else {
      setFull(false);
    }
  }, [office.address, office.businessNumber, office.name, validNumber]);

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
  const onClick = useCallback(() => {
    if (full === true) {
      const data = {
        userIndex: userTokenInfo.userIndex,
        name: office.name,
        address: office.address,
        businessNumber: office.businessNumber
      };
      dispatch(enrollActions.enrollRequest(data));
    }
  }, [
    dispatch,
    full,
    office.address,
    office.businessNumber,
    office.name,
    userTokenInfo.userIndex
  ]);

  const LoadCompany = useCallback(() => {
    dispatch(enrollActions.enrollCompanyList());
  }, [office.name]);

  useEffect(() => {
    // console.log(userTokenInfo);
    // console.log(`number:${validNumber}`);
    // // console.log(`status:${companyApplicantStatus}`);
    // console.log(`status:${enrollData?.companyApplicantStatus}`);
    console.log(enrollCompany);
    inputFull();
    if (enrollData?.companyApplicantStatus === 'WAIT') {
      alert('등록 완료');
      history.push('/mypage');
    }
  }, [enrollData?.companyApplicantStatus, history, inputFull]);

  const obj = {
    0: (
      <EnrollOffice
        onChange={onChange}
        onClick={onClick}
        ValidateBusinessNumber={ValidateBusinessNumber}
        validNumber={validNumber}
        companyApplicantStatus={enrollData?.companyApplicantStatus}
      />
    ),
    1: (
      <EnrollEmployee
        LoadCompany={LoadCompany}
        onChange={onChange}
        onClick={onClick}
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
