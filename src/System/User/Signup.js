import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import SignOffice from '../../Pages/Signup/SignOffice';
import SignEmployee from '../../Pages/Signup/SignEmployee';
import { useHistory } from 'react-router-dom';
import { actions as userActions } from '../../Store/user';
import { actions as validActions } from '../../Store/validation';

const Signup = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    address: '',
    position: 'ADMIN',
    companyName: '',
    companyAddress: '',
    businessNumber: ''
  });
  const [tab, setTab] = useState({
    activeId: 0
  });

  const userInfo = useSelector(state => state.user.userIndex);
  const { validEmail, validNumber } = useSelector(state => state.validation);
  console.log(`email:${validEmail}, number:${validNumber}`);

  useEffect(() => {
    if (userInfo) {
      alert('회원 가입 성공');
      history.push('/');
    }
  }, [userInfo, dispatch]);

  const onChange = e => {
    const { name, value } = e.target;
    setUser(state => ({ ...state, [name]: value }));
  };

  // email 중복 검사 api
  const ValidateEmail = () => {
    if (user.email !== '') {
      const inputEmail = {
        params: {
          email: user.email
        }
      };
      dispatch(validActions.validateEmail(inputEmail));
    }
  };

  // 사업자 번호 중복 검사 api
  const ValidateBusinessNumber = () => {
    if (user.businessNumber) {
      const input = {
        params: {
          businessNumber: user.businessNumber
        }
      };
      dispatch(validActions.validateNumber(input));
    }
  };

  const onClick = () => {
    let data = {
      userSaveRequest: {
        email: user.email,
        password: user.password,
        position: 'ADMIN',
        name: user.name,
        phone: user.phone,
        address: user.address
      },
      companySaveRequest: {
        name: user.companyName,
        address: user.companyAddress,
        businessNumber: user.businessNumber
      }
    };
    // redux-saga로 dispatch(action, data) 전달
    dispatch(userActions.signRequest(data));
  };

  const obj = {
    0: (
      <SignOffice
        user={user}
        onChange={onChange}
        onClick={onClick}
        ValidateEmail={ValidateEmail}
        ValidateBusinessNumber={ValidateBusinessNumber}
      />
    ),
    1: (
      <SignEmployee
        user={user}
        onChange={onChange}
        onClick={onClick}
        ValidateEmail={ValidateEmail}
      />
    )
  };

  const clickHandler = id => {
    setTab({ activeId: id });
  };

  return (
    <>
      <CategoryName onClick={() => clickHandler(0)}>회사 등록</CategoryName>
      <CategoryName onClick={() => clickHandler(1)}>직원 등록</CategoryName>
      {obj[tab.activeId]}
    </>
  );
};

const CategoryName = styled.div``;

export default Signup;
