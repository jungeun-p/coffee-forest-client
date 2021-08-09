import React from 'react';
import styled from 'styled-components';
import { ButtonCommonS } from '../Button';
import basicProfile from '../../assets/Img/profile/basicProfile.png';
import ToggleDown from '../../assets/Icon/ToggleDown.png';
import ToggleUp from '../../assets/Icon/ToggleUp.png';

const WorkListArticle = ({ onView, view, titleType, title, date }) => {
  return (
    <ListWrap>
      <WorkTitle
        onView={onView}
        view={view}
        titleType={titleType}
        title={title}
        date={date}
      />
      <WorkPeople view={view} />
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

const WorkTitle = ({ view, onView, titleType, title, date }) => {
  return (
    <TitleBox>
      <div className="info">
        <WorkType>{titleType}</WorkType>
        <WorkDetail>
          <div className="title">{title}</div>
          <div className="date">{date}</div>
        </WorkDetail>
      </div>
      <Toggle onClick={onView} src={view === true ? ToggleUp : ToggleDown} />
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
`;

const Toggle = styled.img`
  width: 10px;
  height: 5px;
  cursor: pointer;
  /* src: url(${'ToggleDown'}); */
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

const WorkPeople = ({ view }) => {
  return (
    <PeopleBox view={view}>
      <div className="info">
        <div className="title">참여 인원</div>
        <div className="people">
          <People />
          <People />
          <People />
          <People />
          <People />
        </div>
      </div>
      <div className="button">
        <ButtonCommonS title="거절" />
        <ButtonCommonS title="승인" />
      </div>
    </PeopleBox>
  );
};

const PeopleBox = styled.div`
  display: ${props => (props.view ? 'flex' : 'none')};
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
      justify-content: flex-start;
      margin-bottom: 20px;
    }
  }
  .button {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const People = () => {
  return (
    <ProfileWrap>
      <Profile src={basicProfile} />
      <div className="profileName">김바름</div>
    </ProfileWrap>
  );
};

const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 15px;
  .profileName {
    font-weight: 500;
    font-size: 7px;
    line-height: 8px;
    text-align: center;
    color: #858585;
  }
`;
const Profile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  border: 2px solid #c4c4c4;
  margin-bottom: 6px;
`;
export { WorkListArticle };
