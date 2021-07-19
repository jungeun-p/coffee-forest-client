import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignEmployee from '../../Pages/Signup/SignEmployee';
import { useHistory } from 'react-router-dom';
import { actions as userActions } from '../../Store/user';
import { actions as validActions } from '../../Store/validation';
import CheckForm from '../../Hooks/CheckForm';

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

  const { validEmail } = useSelector(state => state.validation);

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

  // 이메일, 비밀번호 형식 검사
  const check = CheckForm(user);

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
  useEffect(() => {
    ValidateEmail();
    // const { signFail, signSuccess } = useSelector(state => state.user);
    // console.log(`signFail:${signFail}, signSuccess:${signSuccess}`);
    console.log(`email:${validEmail}`);
    // console.log(`password: ${check.check.password}`);
    // if (signFailEmail === 'Invalid') {
    //   alert('중복된 계정입니다.');
    // }chkPwd
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
  }, [user]);

  return (
    <SignEmployee
      user={user}
      onChange={onChange}
      onClick={onClick}
      ValidateEmail={ValidateEmail}
      validEmail={validEmail}
      check={check}
    />
  );
};

export default Signup;
