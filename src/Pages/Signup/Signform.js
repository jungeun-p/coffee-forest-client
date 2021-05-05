import React from "react";

const SignBody = ({ ceo, onChange, onClick }) => {
  return (
    <div>
      <div>
        <p>company</p>
        <input
          name="companyName"
          placeholder="companyName"
          value={ceo.companyName}
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
      </div>
      <div>
        <p>info</p>
        <input
          name="email"
          placeholder="email"
          value={ceo.email}
          onChange={onChange}
        />
        <input name="pw" placeholder="pw" value={ceo.pw} onChange={onChange} />
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

export default SignBody;
