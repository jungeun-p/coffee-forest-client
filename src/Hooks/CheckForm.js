import { useState, useEffect } from 'react';

const CheckForm = init => {
  const user = init;

  const [check, setCheck] = useState({
    email: '',
    password: ''
  });

  // 비밀번호 유효성 검사
  const chkPwd = function (str) {
    // 최소 8자, 대문자 하나 이상, 소문자 하나, 특수문자 하나 이상.
    let reg_pwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
    return reg_pwd.test(str) ? true : false;
  };

  // 비밀번호 양식 체크
  const CheckPassword = () => {
    if (chkPwd(user.password) === false && user.password) {
      setCheck({ ...check, password: 'Invalid' });
    } else {
      setCheck({ ...check, password: 'Valid' });
    }
  };

  useEffect(() => {
    CheckPassword();
  }, [user]);

  return {
    CheckPassword,
    check
  };
};

export default CheckForm;
