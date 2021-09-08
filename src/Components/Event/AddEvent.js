import React from 'react';
import styled from 'styled-components';
import { ButtonCommonS } from '../Button';
import { InputSmall } from '../Input';

const AddEvent = ({ day, view, event, onChange, sendSchedule }) => {
  return (
    <AddEventArticle view={view}>
      <EventForm>
        <div className="date">
          <input
            className="eventTitle"
            name="title"
            value={event?.title}
            placeholder="제목 추가"
            onChange={onChange}
          />
        </div>
        <select className="selectBox" name="scheduleType" onChange={onChange}>
          <option value="">유형 선택</option>
          <option value="OUTSIDE">외근 💼</option>
          <option value="CONFERENCE">회의 ✍</option>
          <option value="HOLIDAY">연차 ⛱</option>
        </select>
        {/* <div className="date">
          <InputSmall
            name="date"
            value={event.date}
            placeholder="날짜"
            onChange={onChange}
          />
        </div> */}
        <div className="time">
          <InputSmall
            name="startTime"
            value={event?.startTime}
            placeholder="00:00"
            onChange={onChange}
          />
          <div className="hypen"> - </div>
          <InputSmall
            name="endTime"
            value={event?.endTime}
            placeholder="00:00"
            onChange={onChange}
          />
        </div>
      </EventForm>
      <div className="button">
        <ButtonCommonS onClick={() => sendSchedule(day)} title="일정 등록" />
      </div>
    </AddEventArticle>
  );
};

const AddEventArticle = styled.div`
  display: ${props => (props.view ? '' : 'none')};
  margin-top: 15px;
  .button {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const EventForm = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  .selectBox {
    -webkit-appearance: none; /* for chrome */
    -moz-appearance: none; /*for firefox*/
    appearance: none;
    border-radius: 10px;
    height: 40px;
    padding: 10px;
    background-color: #f8faed;
    border: none;
    font-size: 10px;
    color: #858585;
    margin-top: 15px;
  }
  .selectBox::-ms-expand {
    display: none; /*for IE10,11*/
  }
  .date {
    display: flex;
    flex-direction: column;
    .eventTitle {
      border: none;
      outline: none;
      padding: 14px 0 14px 10px;
      font-size: 14px;
      border-bottom: 1px solid #1ca953;
    }
  }
  .time {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    .hypen {
      align-items: center;
    }
    .title {
      font-size: 12px;
      line-height: 16px;
      color: #858585;
      font-weight: 600;
    }
  }
`;

export default AddEvent;
