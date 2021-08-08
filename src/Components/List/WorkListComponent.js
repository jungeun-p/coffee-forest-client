import React from 'react';
import styled from 'styled-components';
import { ButtonCommonS } from '../Button';

const WorkListArticle = ({ titleType, title, date }) => {
  return (
    <ListWrap>
      <WorkTitle titleType={titleType} title={title} date={date} />
      <WorkPeople />
    </ListWrap>
  );
};

const ListWrap = styled.div`
  background: #ffffff;
  box-shadow: 4px 16px 36px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
`;

const WorkTitle = ({ titleType, title, date }) => {
  return (
    <TitleBox>
      <div className="info">
        <WorkType>{titleType}</WorkType>
        <WorkDetail>
          <div className="title">{title}</div>
          <div className="date">{date}</div>
        </WorkDetail>
      </div>
      <div className="button">></div>
    </TitleBox>
  );
};

const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .info {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .button {
  }
`;

const WorkType = styled.div`
  width: 40px;
  height: 15px;
  background: #fedf5e;
  border-radius: 15px;
  font-size: 9px;
  line-height: 11px;
  text-align: center;
  color: #ffffff;
  font-weight: 700;
  margin-right: 10px;
  padding-top: 5px;
`;

const WorkDetail = styled.div`
  .title {
    font-size: 14px;
    line-height: 16px;
    color: #232323;
    font-weight: 700;
  }
  .date {
    font-size: 12px;
    line-height: 16px;
    color: #858585;
    font-weight: 600;
    margin-top: 15px;
  }
`;

const WorkPeople = () => {
  return (
    <PeopleBox>
      <div className="info">
        <div className="title">참여 인원</div>
        <div className="people">
          <People />
          <div>김용휘</div>
          <div>박정은</div>
        </div>
      </div>
      <div className="button">
        <ButtonCommonS title="승인" />
      </div>
    </PeopleBox>
  );
};

const PeopleBox = styled.div`
  display: none;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  .info {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    .title {
      font-size: 10px;
      line-height: 14px;
      color: #232323;
      font-weight: 700;
      margin-right: 10px;
    }
    .people {
      display: flex;
      flex-direction: row;
    }
  }
  .button {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const People = () => {
  return <div></div>;
};
export { WorkListArticle };
