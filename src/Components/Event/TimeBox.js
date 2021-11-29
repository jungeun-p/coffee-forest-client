import React from 'react';
import styled from 'styled-components';

const TimeBox = ({ time }) => {
  return <TimeTitle>{time}</TimeTitle>;
};

const TimeTitle = styled.div`
  width: 80px;
  height: 20px;
  background: #f3f3f3;
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #232323;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export default TimeBox;
