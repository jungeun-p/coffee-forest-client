import React from 'react';
import styled from 'styled-components';

const InputTitle = ({ title }) => {
  return (
    <InputWrapper>
      <TitleWrap>
        <Title>{title}</Title>
      </TitleWrap>
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;
const TitleWrap = styled.div``;

const Title = styled.div`
  font-size: 14px;
  color: #444444;
  font-weight: 500;
`;

export default InputTitle;
