import React from "react";
import styled from "styled-components";

const SignBody = ({ ceo, onChange, onClick }) => {
  return (
    <SignForm>
      <SignInformation>
        <p>company</p>
        <input
          name="companyName"
          placeholder="companyName"
          value={ceo.companyName}
          onChange={onChange}
        />
        <input
          name="companyAddress"
          placeholder="companyAddress"
          value={ceo.companyAddress}
          onChange={onChange}
        />
        <input
          name="businessNumber"
          placeholder="businessNumber"
          value={ceo.businessNumber}
          onChange={onChange}
        />
      </SignInformation>
      <SignInformation>
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
        <input
          name="address"
          placeholder="address"
          value={ceo.address}
          onChange={onChange}
        />
      </SignInformation>
      <button onClick={onClick}>회원가입</button>
    </SignForm>
  );
};

const SignForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SignInformation = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

export default SignBody;
