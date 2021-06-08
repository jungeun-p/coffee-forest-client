import React, { useState } from "react";
import styled from "styled-components";
import LoginBody from "../../Pages/Login/LoginBody";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    pw: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser((state) => ({ ...state, [name]: value }));
  };

  const onClick = () => {
    if ((user.email && user.pw) === "") {
      alert("모두 기입");
    } else {
      alert("success!");
    }
  };
  return <LoginBody user={user} onChange={onChange} onClick={onClick} />;
};

export default Login;
