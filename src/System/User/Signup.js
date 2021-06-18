import React, { useState } from 'react';
import styled from 'styled-components';
//import { useDispatch } from "react-redux";
import axios from 'axios';
//import SignBody from "../../Pages/Signup/SignBody";
import SignOffice from '../../Pages/Signup/SignOffice';
import SignEmployee from '../../Pages/Signup/SignEmployee';
import { API_HOST } from '../../Lib/constant';
//import { actions } from "../../Store/user";
//import { API_HOST } from "../../Lib/constant";
//import { LOCAL_HOST } from "../../Lib/constant";

const Signup = () => {
  const [user, setUser] = useState({
    email: '',
    pw: '',
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

  //const dispatch = useDispatch();
  const onChange = e => {
    const { name, value } = e.target;
    setUser(state => ({ ...state, [name]: value }));
  };

  // email 중복 검사 api
  const ValidateEmail = () => {
    // axios
    //   .get(`${LOCAL_HOST}users/duplication`)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };

  // 사업자 번호 중복 검사 api
  const ValidateBusinessNumber = () => {
    // axios
    //   .get(`${LOCAL_HOST}company/duplication`)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    //   });
  };

  //redux-saga로 dispatch(action, data) 전달
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
    const res = await fetch(`http://192.168.60.103:80/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
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
      })
    });
    const data = await res.json();
    console.log(data);
    // try {
    //   const res = await axios.post(
    //     `${API_HOST}users`,
    //     {
    //       userSaveRequest: {
    //         email: 'yh0921k@gmail.com',
    //         password: '123123',
    //         position: 'ADMIN',
    //         name: '김용휘',
    //         phone: '010-3193-4705',
    //         address: '경기도 안산시 본오동 807-6'
    //       },
    //       companySaveRequest: {
    //         name: '커피포레스트',
    //         address: '경기도 수원시',
    //         businessNumber: '010-6225-7753'
    //       }
    //     },
    //     { 'Content-Type': 'application/json' }
    //   );
    //   console.log(res);
    // } catch (e) {
    //   console.log(e);
    // }
    // .then((res) => {
    //   console.log(res.data);
    // })
    // .catch((e) => {
    //   console.log(e);
    // });
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
