import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
// import SignOffice from '../../Pages/Signup/SignOffice';
import SignEmployee from '../../Pages/Signup/SignEmployee';
import { useHistory } from 'react-router-dom';
import { actions as userActions } from '../../Store/user';
import { actions as validActions } from '../../Store/validation';
// import ButtonSelect from '../../Components/Button/ButtonSelect';
import useCheck from '../../Hooks/useCheck';

const Signup = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: '',
    password: '',
    name: '',
    phone: '',
    address: ''
  });
  // const check = useCheck(user);
  // const checkPassword = check.CheckPassword();

  // const { signFail, signSuccess } = useSelector(state => state.user);
  // console.log(`signFail:${signFail}, signSuccess:${signSuccess}`);
  const { validEmail } = useSelector(state => state.validation);
  console.log(`email:${validEmail}`);

  useEffect(() => {
    // if (signFailEmail === 'Invalid') {
    //   alert('중복된 계정입니다.');
    // }
    // if (signFailPw === 'Invalid') {
    //   alert('비밀번호를 다시 설정해주세요');
    // }
    // if (signSuccess === 'Valid') {
    //   alert('회원 가입 성공');
    //   history.push('/');
    // }
    // else {
    //   alert('가능한 비밀번호 입니다.');
    // }
    // if (signSuccess === 'success') {
    //   alert('회원 가입 성공');
    //   history.push('/');
    // }
  }, []);

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

  // const ValidateForm = () => {
  //   let data = {
  //     email: user.email,
  //     password: user.password,
  //     name: user.name,
  //     phone: user.phone,
  //     address: user.address
  //   };
  //   // redux-saga로 dispatch(action, data) 전달
  //   dispatch(userActions.signRequest(data));
  // };

  // // 사업자 번호 중복 검사 api
  // const ValidateBusinessNumber = () => {
  //   if (user.businessNumber) {
  //     const input = {
  //       params: {
  //         businessNumber: user.businessNumber
  //       }
  //     };
  //     dispatch(validActions.validateNumber(input));
  //   }
  // };

  const onClick = () => {
    let data = {
      email: user.email,
      password: user.password,
      name: user.name,
      phone: user.phone,
      address: user.address
    };
    // redux-saga로 dispatch(action, data) 전달
    dispatch(userActions.signRequest(data));
  };

  return (
    <SignEmployee
      user={user}
      onChange={onChange}
      onClick={onClick}
      ValidateEmail={ValidateEmail}
      validEmail={validEmail}
    />
  );
};

export default Signup;
