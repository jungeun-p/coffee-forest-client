import dayjs from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import isoWeek from 'dayjs/plugin/isoWeek';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import React, { useState } from 'react';
import styled from 'styled-components';

const AddThisMonth = ({ LoadSchedule }) => {
  // day
  // const weekday = require('dayjs/plugin/weekday');
  // const isoWeek = require('dayjs/plugin/isoWeek');
  // const weekOfYear = require('dayjs/plugin/weekOfYear');

  // day extend
  dayjs.extend(weekday);
  dayjs.extend(isoWeek);
  dayjs.extend(weekOfYear);

  const today = dayjs();
  const [viewDate, setViewDate] = useState(dayjs());
  const [selectDate, setSelectDate] = useState(dayjs());

  const createCalendar = () => {
    const startWeek = viewDate.startOf('month').week();
    const endWeek =
      viewDate.endOf('month').week() === 1
        ? 53
        : viewDate.endOf('month').week();
    let calendar = [];
    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <div className="oneWeek" key={week}>
          {Array(7)
            .fill(0)
            .map((n, i) => {
              let current = viewDate
                .startOf('week')
                .week(week)
                .add(n + i, 'day');
              if (viewDate.format('MM') === 12) {
                current = viewDate
                  .startOf('week')
                  .week(week - 52)
                  .add(n + i, 'day');
              }
              // 현재 날짜 (기준)
              let isSelected =
                selectDate.format('YYYYMMDD') === current.format('YYYYMMDD')
                  ? 'selected'
                  : '';
              let isToday =
                today.format('YYYYMMDD') === current.format('YYYYMMDD')
                  ? 'today'
                  : '';
              let isNone =
                current.format('MM') === viewDate.format('MM') ? '' : 'none';
              return (
                <div className={`box`} key={`${week}_${i}`}>
                  <div
                    className={`text ${isSelected} ${isToday} ${isNone}`}
                    onClick={() => {
                      LoadSchedule(current.format('YYYY-MM-DD'));
                      setSelectDate(current);
                    }}
                  >
                    <span className={`day`}>{current.format('D')}</span>
                    {isToday ? (
                      <div className="isToday" />
                    ) : isSelected ? (
                      <span className="isSelected"></span>
                    ) : null}
                  </div>
                </div>
              );
            })}
        </div>
      );
    }

    return calendar;
  };

  const changeMonth = (date, changeString) => {
    switch (changeString) {
      case 'add':
        return setViewDate(viewDate.add(1, 'month'));
      case 'subtract':
        return setViewDate(viewDate.subtract(1, 'month'));
      default:
        return date;
    }
  };

  return (
    <>
      <StyledHeader>
        <span className="thisMonth">{viewDate.format('MM')}월</span>
        <div className="button">
          <div
            className="icon previous_icon"
            onClick={() => changeMonth(viewDate, 'subtract')}
          >
            <i className="fas fa-chevron-left" />
          </div>
          <div
            className="icon next_icon"
            onClick={() => changeMonth(viewDate, 'add')}
          >
            <i className="fas fa-chevron-right" />
          </div>
        </div>
      </StyledHeader>
      <StyledBody>
        <div className="row week">
          <div className="box">
            <span className="text">일</span>
          </div>
          <div className="box">
            <span className="text">월</span>
          </div>
          <div className="box">
            <span className="text">화</span>
          </div>
          <div className="box">
            <span className="text">수</span>
          </div>
          <div className="box">
            <span className="text">목</span>
          </div>
          <div className="box">
            <span className="text">금</span>
          </div>
          <div className="box">
            <span className="text">토</span>
          </div>
        </div>
        <div className="dateBox">{createCalendar()}</div>
      </StyledBody>
    </>
  );
};

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
  .thisMonth {
    font-weight: 700;
    font-size: 18px;
    color: #1ca953;
  }
  .button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    cursor: pointer;
    .icon {
      margin-left: 10px;
    }
  }
`;

const StyledBody = styled.div`
  margin-bottom: 10px;
  .row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-weight: 700;
    font-size: 12px;
    margin-bottom: 15px;
  }
  .dateBox {
    display: flex;
    flex-direction: column;
    .oneWeek {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
      .box {
        margin: 10px 0;
        width: 30px;
        height: 35px;
        text-align: center;
        cursor: pointer;
        .text {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #858585;
          .isToday {
            width: 14px;
            border: 1px solid #1ca953;
          }
        }
        .selected {
          color: #1ca953;
          font-weight: 800;
        }
        .none {
          color: #f3f3f3;
        }
      }
    }
  }
`;

export default AddThisMonth;
