import React, { useState } from "react";

const Signup = () => {
  const [ceo, setCeo] = useState({
    companyName: "",
    address: "",
    businessNumber: "",
    name: "",
    phone: "",
    email: "",
    position: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setCeo((state) => ({ ...state, [name]: value }));
  };

  const onClick = () => {
    alert(ceo.position);
  };
  return (
    <div>
      <p>company</p>
      <input
        name="companyName"
        placeholder="companyName"
        value={ceo.companyname}
        onChange={onChange}
      />
      <input
        name="address"
        placeholder="address"
        value={ceo.address}
        onChange={onChange}
      />
      <input
        name="businessNumber"
        placeholder="businessNumber"
        value={ceo.businessNumber}
        onChange={onChange}
      />

      <div>
        <p>info</p>
        <input
          name="name"
          placeholder="name"
          value={ceo.name}
          onChange={onChange}
        />
        <input
          name="phone"
          placeholder="phone"
          value={ceo.phone}
          onChange={onChange}
        />
        <input
          name="email"
          placeholder="email"
          value={ceo.email}
          onChange={onChange}
        />
        <input
          name="position"
          placeholder="position"
          value={ceo.position}
          onChange={onChange}
        />
      </div>
      <button onClick={onClick}>회원가입</button>
    </div>
  );
};

export default Signup;
