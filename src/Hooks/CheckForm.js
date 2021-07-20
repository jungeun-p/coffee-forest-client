import { useState, useCallback, useEffect } from 'react';

const CheckForm = init => {
  const user = init;

  const [check, setCheck] = useState({
    email: 'Invalid',
    password: 'Invalid'
  });

  // 이메일 유효성 검사
  const chkEmail = function (str) {
    //let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    let regExp = /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i;
    return regExp.test(str) ? true : false;
  };

  // 비밀번호 유효성 검사
  const chkPwd = function (str) {
    // 최소 8자, 대문자 하나 이상, 소문자 하나, 특수문자 하나 이상.
    let reg_pwd = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
    return reg_pwd.test(str) ? true : false;
  };

  // 이메일 양식 체크
  const CheckEmail = useCallback(() => {
    if (chkEmail(user.email) === false) {
      setCheck({ ...check, email: 'Invalid' });
    } else {
      setCheck({ ...check, email: 'Valid' });
    }
  }, [user, check]);

  // 비밀번호 양식 체크
  const CheckPassword = useCallback(() => {
    if (chkPwd(user.password) === false) {
      setCheck({ ...check, password: 'Invalid' });
    } else {
      setCheck({ ...check, password: 'Valid' });
    }
  }, [user, check]);

  // useEffect(() => {
  //   // CheckEmail();
  //   CheckPassword();
  // });

  return {
    CheckEmail,
    CheckPassword,
    check
  };
};

export default CheckForm;
