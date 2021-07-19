const { useState } = require('react');

const useCheck = init => {
  const user = init;

  const [check, setCheck] = useState({
    password: ''
  });

  // 비밀번호 유효성 검사
  const chkPwd = function (str) {
    //let reg_pwd = /^.*(?=.{8,25})(?=.*[0-9])(?=.*[a-zA-Z]).*$/;
    let reg_pwd = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{8,20}$/;
    return !reg_pwd.test(str) ? false : true;
  };

  // 비밀번호 양식 체크
  const CheckPassword = () => {
    if (chkPwd(user.password) === false && user.password !== '') {
      setCheck({ ...check, password: 'Valid' });
    } else {
      setCheck({ ...check, password: 'Invalid' });
    }
  };

  return {
    CheckPassword,
    check
  };
};

export default useCheck;
