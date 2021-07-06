import React from 'react';
import styled from 'styled-components';

const AddEvent = ({ view, event, onChange, sendSchedule, date }) => {
  return (
    <AddEventArticle view={view}>
      <EventForm>
        <select className="selectBox" name="scheduleStatus" onChange={onChange}>
          <option value="">선택</option>
          <option value="OUTSIDE">외근 💼</option>"
          <option value="">회의 ✍</option>"<option value="">연차 ⛱</option>"
        </select>
        <div className="date">
          <input
            id="EventDate"
            name="date"
            value={event.date}
            placeholder="날짜"
            onChange={onChange}
          />
          <div>
            <input
              name="startTime"
              value={event.startTime}
              placeholder="시작 시간"
              onChange={onChange}
            />
            <input
              name="endTime"
              value={event.endTime}
              placeholder="마감 시간"
              onChange={onChange}
            />
          </div>
        </div>
        <button onClick={sendSchedule}>일정 등록</button>
      </EventForm>
    </AddEventArticle>
  );
};

const AddEventArticle = styled.div`
  display: ${props => (props.view ? '' : 'none')};
  margin-top: 15px;
`;

const EventForm = styled.div`
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
`;

export default AddEvent;
