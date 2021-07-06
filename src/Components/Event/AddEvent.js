import React from 'react';
import styled from 'styled-components';

const AddEvent = ({ view, event, onChange, sendSchedule, date }) => {
  return (
    <AddEventArticle view={view}>
      <div>
        <input
          name="scheduleStatus"
          value={event.scheduleStatus}
          placeholder="외근"
          onChange={onChange}
        />
        <input
          name="date"
          value={event.date || ''}
          placeholder="날짜"
          onChange={onChange}
        />
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
      <button onClick={sendSchedule}>일정 등록</button>
    </AddEventArticle>
  );
};

const AddEventArticle = styled.div`
  display: ${props => (props.view ? '' : 'none')};
  margin-top: 15px;
`;

export default AddEvent;
