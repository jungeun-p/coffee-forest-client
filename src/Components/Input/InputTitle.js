import React from 'react';
import styled from 'styled-components';

const InputTitleB = ({ title }) => {
  return (
    <InputWrapperB>
      <TitleWrapB>
        <TitleB>{title}</TitleB>
      </TitleWrapB>
    </InputWrapperB>
  );
};

const InputWrapperB = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 15px;
`;
const TitleWrapB = styled.div``;

const TitleB = styled.div`
  font-size: 18px;
  color: #232323;
  font-weight: 600;
`;

const InputTitleS = ({ title }) => {
  return (
    <InputWrapperS>
      <TitleWrapS>
        <TitleS>{title}</TitleS>
      </TitleWrapS>
    </InputWrapperS>
  );
};
const InputWrapperS = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 15px;
`;
const TitleWrapS = styled.div``;

const TitleS = styled.div`
  font-size: 14px;
  color: #232323;
  font-weight: 600;
`;

export { InputTitleS, InputTitleB };
