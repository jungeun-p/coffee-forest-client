import React from 'react';
import styled from 'styled-components';
import { ButtonCommonS } from '../Button';
import { InputSmall } from '../Input';

const AddEvent = ({ view, event, onChange, sendSchedule, date }) => {
  return (
    <AddEventArticle view={view}>
      <EventForm>
        <select className="selectBox" name="scheduleStatus" onChange={onChange}>
          <option value="">유형 선택</option>
          <option value="OUTSIDE">외근 💼</option>"
          <option value="">회의 ✍</option>"<option value="">연차 ⛱</option>"
        </select>
        <div className="date">
          <InputSmall
            name="date"
            value={event.date}
            placeholder="날짜"
            onChange={onChange}
          />
        </div>
        <div className="time">
          <InputSmall
            name="startTime"
            value={event.startTime}
            placeholder="시작 시간"
            onChange={onChange}
          />
          <InputSmall
            name="endTime"
            value={event.endTime}
            placeholder="마감 시간"
            onChange={onChange}
          />
        </div>
      </EventForm>
      <div className="button">
        <ButtonCommonS onClick={sendSchedule} title="일정 등록" />
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
    background-color: #f3f3f3;
    border: none;
    font-size: 10px;
    color: #b7b7b7;
  }
  .selectBox::-ms-expand {
    display: none; /*for IE10,11*/
  }
  .date {
    display: flex;
    flex-direction: column;
  }
  .time {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .title {
      font-size: 12px;
      line-height: 16px;
      color: #858585;
      font-weight: 600;
      padding-top: 15px;
    }
  }
`;

export default AddEvent;
