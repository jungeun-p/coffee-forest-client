import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import SignOffice from '../../Pages/Signup/SignOffice';
import SignEmployee from '../../Pages/Signup/SignEmployee';
import { LOCAL_HOST } from '../../Lib/constant';
import { useHistory } from 'react-router-dom';
import { actions } from '../../Store/user';

const Signup = () => {
  const history = useHistory();
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

  const { validMessage, userIndex } = useSelector(state => state.user);
  const dispatch = useDispatch();

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
      dispatch(actions.validateEmail(inputEmail));
    } else {
      alert('이미 등록된 이메일이 존재합니다.');
    }
    if (validMessage === 'Available') {
      alert('등록 가능합니다');
    }
  };

  // 사업자 번호 중복 검사 api
  const ValidateBusinessNumber = () => {
    if (user.businessNumber !== '') {
      const input = {
        params: {
          businessNumber: user.businessNumber
        }
      };
      dispatch(actions.validateNumber(input));
    } else {
      alert('사업자 번호를 제대로 작성해주세요.');
    }
    if (validMessage === 'Available') {
      alert('등록 가능합니다');
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
    dispatch(actions.signRequest(data));
  };

  useEffect(() => {
    if (userIndex !== '') {
      alert('회원 가입 성공');
      history.push('/');
    } else {
      alert('다시 한번 작성해주세요');
    }
  }, [dispatch, userIndex]);

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
