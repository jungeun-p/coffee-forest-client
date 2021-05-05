import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    id: "",
    pw: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setUser((state) => ({ ...state, [name]: value }));
  };

  const onClick = () => {};
  return (
    <div>
      <input name="id" value={user.id} placeholder="id" onChange={onChange} />
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
