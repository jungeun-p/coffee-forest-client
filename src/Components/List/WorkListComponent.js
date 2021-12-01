import React, { useState } from 'react';
import styled from 'styled-components';
import { ButtonCommonS } from '../Button';
import basicProfile from '../../assets/Img/profile/basicProfile.png';
import ToggleDown from '../../assets/Icon/ToggleDown.png';
import ToggleUp from '../../assets/Icon/ToggleUp.png';
import TimeBox from '../Event/TimeBox';

const WorkListArticle = ({
  userName,
  profileImage,
  titleType,
  title,
  date,
  startTime,
  endTime,
  onAccept,
  onReject
}) => {
  const [view, setView] = useState(false);
  const onView = () => {
    setView(!view ? true : false);
  };
  return (
    <ListWrap>
      <WorkTitle
        onView={onView}
        view={view}
        titleType={titleType}
        title={title}
        date={date}
        startTime={startTime}
        endTime={endTime}
      />
      <WorkPeople
        userName={userName}
        profileImage={profileImage}
        view={view}
        onAccept={onAccept}
        onReject={onReject}
      />
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

const WorkTitle = ({
  view,
  onView,
  titleType,
  title,
  date,
  startTime,
  endTime
}) => {
  return (
    <TitleBox>
      <div className="info">
        <WorkType
          titleType={
            titleType === 'ENTER' || titleType === 'LEAVE'
              ? '#1ca953'
              : titleType === 'OUTSIDE'
              ? '#5EB1FE'
              : titleType === 'CONFERENCE'
              ? '#fedf5e'
              : '#FE5E5E'
          }
        >
          {titleType === 'ENTER' || titleType === 'LEAVE'
            ? '근무'
            : titleType === 'OUTSIDE'
            ? '외근'
            : titleType === 'CONFERENCE'
            ? '회의'
            : '휴가'}
        </WorkType>
        <WorkDetail>
          <div className="title">{title}</div>
          <div className="time">
            <TimeBox time={startTime} />
            <div className="hypen">-</div>
            <TimeBox time={endTime} />
          </div>
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
    flex-wrap: wrap;
  }
`;

const Toggle = styled.img`
  width: 10px;
  height: 5px;
  cursor: pointer;
  margin: 2px 0 0 10px;
  /* src: url(${'ToggleDown'}); */
`;

const WorkType = styled.div`
  width: 40px;
  height: 15px;
  background-color: ${props => props.titleType};
  /* 휴가 : #FE5E5E */
  /* 외근 : #5EB1FE */
  border-radius: 15px;
  font-size: 9px;
  line-height: 11px;
  text-align: center;
  color: #ffffff;
  font-weight: 700;
  margin-right: 10px;
  margin-bottom: 10px;
  padding-top: 5px;
`;

const WorkDetail = styled.div`
  .title {
    font-size: 14px;
    line-height: 16px;
    color: #232323;
    font-weight: 700;
  }
  .time {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .hypen {
      font-size: 15px;
      margin: 10px 5px 0 5px;
    }
  }
  .date {
    font-size: 12px;
    line-height: 16px;
    color: #858585;
    font-weight: 600;
    margin-top: 15px;
  }
`;

const WorkPeople = ({ userName, profileImage, view, onReject, onAccept }) => {
  return (
    <PeopleBox view={view}>
      <div className="info">
        <div className="title">참여 인원</div>
        <div className="people">
          <People userName={userName} profileImage={profileImage} />
        </div>
      </div>
      {onReject && onAccept && (
        <div className="button">
          <ButtonCommonS onClick={onReject} title="거절" />
          <ButtonCommonS onClick={onAccept} title="승인" />
        </div>
      )}
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
    justify-content: space-between;
    flex-wrap: wrap;
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
      flex-wrap: wrap;
    }
  }
  .button {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-top: 20px;
  }
`;

const People = ({ userName, profileImage }) => {
  return (
    <ProfileWrap>
      <Profile src={profileImage || basicProfile} />
      <div className="profileName">{userName || '김바름'}</div>
    </ProfileWrap>
  );
};

const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 15px;
  .profileName {
    font-weight: 500;
    font-size: 7px;
    line-height: 8px;
    text-align: center;
    color: #858585;
    margin-bottom: 5px;
  }
`;
const Profile = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 100px;
  border: 2px solid #c4c4c4;
  margin-bottom: 6px;
  object-fit: cover;
`;
export { WorkListArticle };
