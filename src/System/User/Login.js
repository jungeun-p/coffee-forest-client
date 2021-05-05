import React, { useState } from "react";

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
  return (
    <div>
      <input
        name="email"
        value={user.email}
        placeholder="email"
        onChange={onChange}
      />
      <input
        name="pw"
        value={user.pw}
        type="password"
        placeholder="pw"
        onChange={onChange}
      />
      <button onClick={onClick}>로그인</button>
    </div>
  );
};

export default Login;
