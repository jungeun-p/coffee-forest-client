// @ts-nocheck
import React from 'react';
import styled from 'styled-components';

const InputCommon = ({
  label,
  width,
  name,
  value,
  placeholder,
  placeholderTitle,
  onChange,
  onBlur,
  type,
  disabled,
  validEmail,
  validNumber,
  companyApplicantStatus,
  checkEmail,
  checkPw
}) => {
  return (
    <>
      <InputWrap>
        <InputTitle>{placeholder}</InputTitle>
        <Input
          width={width !== '' ? width : false}
          autoComplete="off"
          name={name}
          value={value}
          placeholder={placeholderTitle}
          onBlur={onBlur}
          onChange={onChange}
          type={type}
          disabled={disabled}
        />
      </InputWrap>
      {validEmail && (
        <Validation validEmail={validEmail === 'Duplicated' ? true : false}>
          이미 등록된 이메일입니다.
        </Validation>
      )}
      {validNumber && (
        <CheckNumber
          validNumber={
            validNumber === 'Invalid Business Number Format' ? true : false
          }
        >
          사업자 등록 포맷에 맞춰서 작성해주세요.
        </CheckNumber>
      )}
      {companyApplicantStatus && (
        <ApplicationNumber
          companyApplicantStatus={
            companyApplicantStatus === 'Already Exists' ? true : false
          }
        >
          이미 존재하는 사업자 번호 입니다.
        </ApplicationNumber>
      )}
      {checkEmail && (
        <CheckEmail checkEmail={checkEmail === 'Invalid' ? true : false}>
          이메일 양식에 맞춰주세요.
        </CheckEmail>
      )}
      {checkPw && (
        <CheckPassword checkPw={checkPw === 'Invalid' ? true : false}>
          대소문자, 숫자, 특수문자 포함하여 최소 8자 이상으로 작성해주세요.
        </CheckPassword>
      )}
    </>
  );
};

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: '';
`;
const InputTitle = styled.div`
  transform: translateY(3em);
  height: 20px;
  font-size: 10px;
  color: #1ca953;
  font-weight: 700;
  margin-left: 12px;
`;
const Input = styled.input`
  /* width: 320px; */
  width: ${props => props.width};
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: #f8faed;
  font-size: inherit;
  text-align: left;
  outline: none;
  color: #232323;
  font-size: 14px;
  font-weight: 700;
  padding: 0;
  padding: 20px 0 8px 12px;
  /* margin-top: 20px; */
  ::placeholder {
    color: #d9dbce;
  }
  :disabled {
    color: #d9dbce;
  }
`;

const Validation = styled.div`
  font-size: 8px;
  color: red;
  padding: 8px 0 0 8px;
  display: ${props => (props.validEmail ? 'inline' : 'none')};
`;

const CheckNumber = styled.div`
  font-size: 8px;
  color: red;
  padding: 8px 0 0 8px;
  display: ${props => (props.validNumber ? 'inline' : 'none')};
`;

const ApplicationNumber = styled.div`
  font-size: 8px;
  color: red;
  padding: 8px 0 0 8px;
  display: ${props => (props.companyApplicantStatus ? 'inline' : 'none')};
`;

const CheckEmail = styled.div`
  font-size: 8px;
  color: red;
  padding: 8px 0 0 8px;
  display: ${props => (props.checkEmail ? 'inline' : 'none')};
`;

const CheckPassword = styled.div`
  font-size: 8px;
  color: red;
  padding: 8px 0 0 8px;
  display: ${props => (props.checkPw ? 'inline' : 'none')};
`;

export default InputCommon;
