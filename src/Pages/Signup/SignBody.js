import React from "react";
import styled from "styled-components";

const SignBody = ({ user, onChange, onClick }) => {
  return (
    <SignForm>
      <SignInformation>
        <p>company</p>
        {user ? (
          <>
            <input
              name="companyName"
              placeholder="companyName"
              value={user.companyName}
              onChange={onChange}
            />
            <input
              name="companyAddress"
              placeholder="companyAddress"
              value={user.companyAddress}
              onChange={onChange}
            />
            <input
              name="businessNumber"
              placeholder="businessNumber"
              value={user.businessNumber}
              onChange={onChange}
            />
          </>
        ) : (
          <input placeholder="회사 이름을 작성해주세요" />
        )}
        {/* 회사 리스트 API */}
        {/* <input placeholder="회사 이름을 작성해주세요" />
        <input
          name="companyName"
          placeholder="companyName"
          value={user.companyName}
          onChange={onChange}
        />
        <input
          name="companyAddress"
          placeholder="companyAddress"
          value={user.companyAddress}
          onChange={onChange}
        />
        <input
          name="businessNumber"
          placeholder="businessNumber"
          value={user.businessNumber}
          onChange={onChange}
        /> */}
      </SignInformation>
      <SignInformation>
        <p>info</p>
        <input
          name="email"
          placeholder="email"
          value={user.email}
          onChange={onChange}
        />
        <input name="pw" placeholder="pw" value={user.pw} onChange={onChange} />
        <input
          name="name"
          placeholder="name"
          value={user.name}
          onChange={onChange}
        />
        <input
          name="phone"
          placeholder="phone"
          value={user.phone}
          onChange={onChange}
        />
        <input
          name="position"
          placeholder="position"
          value={user.position}
          onChange={onChange}
        />
        <input
          name="address"
          placeholder="address"
          value={user.address}
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