import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignTemplate from '../../Pages/Signup/SignTemplate';
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

  const [full, setFull] = useState(false);

  const { validEmail } = useSelector(state => state.validation);

  const onChange = e => {
    const { name, value } = e.target;
    setUser(state => ({ ...state, [name]: value }));
  };

  // 이메일, 비밀번호 형식 검사
  const check = CheckForm(user);
  const { email, password } = check.check;

  // email 중복 검사 api
  const ValidateEmail = useCallback(() => {
    if (user.email !== '') {
      const inputEmail = {
        params: {
          email: user.email
        }
      };
      dispatch(validActions.validateEmail(inputEmail));
      if (validEmail !== 'Duplicated') {
        check.CheckEmail();
      }
    }
  }, [check, dispatch, user.email, validEmail]);

  const inputFull = useCallback(() => {
    if (
      validEmail === 'Available' &&
      email !== 'Invalid' &&
      password === 'Valid' &&
      user.email !== '' &&
      user.password !== '' &&
      user.name !== '' &&
      user.phone !== '' &&
      user.address !== ''
    ) {
      setFull(true);
    } else {
      setFull(false);
    }
  }, [
    email,
    password,
    user.address,
    user.email,
    user.name,
    user.password,
    user.phone,
    validEmail
  ]);

  const onClick = () => {
    if (full === true) {
      let data = {
        email: user.email,
        password: user.password,
        name: user.name,
        phone: user.phone,
        address: user.address
      };
      // redux-saga로 dispatch(action, data) 전달
      dispatch(userActions.signRequest(data));
      alert('회원 가입 성공!');
      history.push('/');
    } else {
      alert('제대로 작성해주세요');
    }
  };

  useEffect(() => {
    inputFull();
  }, [inputFull]);

  return (
    <SignTemplate
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
