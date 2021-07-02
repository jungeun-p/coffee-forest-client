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
  justify-content: flex-start;
  margin-bottom: 15px;
`;
const TitleWrap = styled.div``;

const Title = styled.div`
  font-size: 18px;
  color: #444444;
  font-weight: 600;
`;

export default InputTitle;
