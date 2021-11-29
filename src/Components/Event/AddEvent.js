import React from 'react';
import styled from 'styled-components';
import { ButtonCommonS } from '../Button';
import InputTime from '../Input/InputTime';
// import FormSelect from '../Select/FormSelect';

const AddEvent = ({ day, view, event, onChange, sendSchedule }) => {
  // const [selected, onSelected] = useState(false);
  // const SelectOption = () => {
  //   onSelected(!selected ? true : false);
  // };
  return (
    <AddEventArticle view={view}>
      <EventForm>
        <div className="time">
          <SelectType scheduleType={event.scheduleType} onChange={onChange} />
          <InputTime
            name="startTime"
            value={event?.startTime}
            placeholder="00:00"
            onChange={onChange}
          />
          <InputTime
            name="endTime"
            value={event?.endTime}
            placeholder="00:00"
            onChange={onChange}
          />
        </div>
        <div className="title">
          <input
            className="eventTitle"
            name="title"
            value={event?.title}
            placeholder="제목 추가"
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
  margin-top: 10px;
  .button {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
`;
const SelectType = ({ scheduleType, onChange }) => {
  return (
    <SelectForm
      className="selectBox"
      name="scheduleType"
      onChange={onChange}
      scheduleType={scheduleType}
    >
      <option value="">유형</option>
      <option value="OUTSIDE">외근</option>
      <option value="CONFERENCE">회의</option>
      <option value="HOLIDAY">연차</option>
    </SelectForm>
  );
};

const SelectForm = styled.select`
  -webkit-appearance: none; /* for chrome */
  -moz-appearance: none; /*for firefox*/
  appearance: none;
  border-radius: 5px;
  text-align: center;
  width: 35px;
  height: 20px;
  /* background-color: #b7b7b7; */
  background-color: #${props => (props.scheduleType === 'OUTSIDE' ? '5eb1fe' : props.scheduleType === 'HOLIDAY' ? 'FE5E5E' : props.scheduleType === 'CONFERENCE' ? 'FEDF5E' : 'B7B7B7')};
  border: none;
  font-size: 12px;
  color: #ffffff;
  font-weight: 600;
  /* margin-top: 15px; */
  margin-right: 15px;
  ::-ms-expand {
    display: none; /*for IE10,11*/
  }
`;

const EventForm = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  .title {
    display: flex;
    flex-direction: column;
    .eventTitle {
      border: none;
      outline: none;
      padding: 14px 0 14px 0;
      font-size: 14px;
      border-bottom: 1px solid #1ca953;
    }
  }
`;

export default AddEvent;
