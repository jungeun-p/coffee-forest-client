import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
//import { actions } from "../../Store/user";
import SignOffice from '../../Pages/Signup/SignOffice';
import SignEmployee from '../../Pages/Signup/SignEmployee';
import { LOCAL_HOST } from '../../Lib/constant';
import { useHistory } from 'react-router-dom';

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
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState({
    activeId: 0
  });
  // const user = useSelector();
  const dispatch = useDispatch();
  const onChange = e => {
    const { name, value } = e.target;
    setUser(state => ({ ...state, [name]: value }));
  };

  // email 중복 검사 api
  const ValidateEmail = () => {
    if (user.email !== '') {
      axios
        .get(`${LOCAL_HOST}users/duplication`, {
          params: {
            email: user.email
          }
        })
        .then(response => {
          if (response.data === 'Duplicated') {
            alert('중복된 이메일 입니다.');
          } else {
            alert('가입 가능한 이메일 입니다.');
          }
        })
        .catch(error => {
          console.log(error.response.data);
        });
    }
  };

  // 사업자 번호 중복 검사 api
  const ValidateBusinessNumber = () => {
    if (user.businessNumber !== '') {
      axios
        .get(`${LOCAL_HOST}company/duplication`, {
          params: {
            businessNumber: user.businessNumber
          }
        })
        .then(response => {
          if (response.data === 'Duplicated') {
            alert('중복된 사업자 번호입니다.');
          } else {
            alert('등록 가능한 사업자 번호입니다.');
          }
        })
        .catch(error => {
          console.log(error.response.data);
        });
    }
  };

  // redux-saga로 dispatch(action, data) 전달
  // const onClick = async () => {
  const onClick = async () => {
    // let body = {
    //   userSaveRequest: {
    //     email: user.email,
    //     password: user.password,
    //     position: "ADMIN",
    //     name: user.name,
    //     phone: user.phone,
    //     address: user.address,
    //   },
    //   companySaveRequest: {
    //     name: user.companyName,
    //     address: user.companyAddress,
    //     businessNumber: user.businessNumber,
    //   },
    // };
    //dispatch(actions.signRequest, body);
    setLoading(false);
    try {
      const res = await axios.post(
        `${LOCAL_HOST}users`,
        {
          userSaveRequest: {
            email: user.email,
            password: user.password,
            position: user.position,
            name: user.name,
            phone: user.phone,
            address: user.address
          },
          companySaveRequest: {
            name: user.companyName,
            address: user.companyAddress,
            businessNumber: user.businessNumber
          }
        },
        { 'Content-Type': 'application/json' }
      );
      console.log(res);
      alert('회원 가입 성공!');
      // 메인-로그인 화면으로 이동
      history.push('/');
    } catch (e) {
      console.log(e);
    }
    setLoading(true);
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
