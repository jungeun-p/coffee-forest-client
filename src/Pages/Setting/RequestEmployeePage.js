import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { TitleB } from '../../Components/Common';
import { ListArticle } from '../../Components/List';

const RequestEmployee = ({ LoadRequestList, AcceptEmployee }) => {
  const acceptance = 'allow';
  const { requestList } = useSelector(state => state.employee);

  useEffect(() => {
    LoadRequestList();
  }, [LoadRequestList]);

  return (
    <ListForm>
      <TitleB>사원 수락 대기</TitleB>
      <div className="list">
        {requestList &&
          requestList.map(item => (
            <ListArticle
              // onClick={AcceptEmployee}
              key={item.workApplicantIndex}
              onClick={() => AcceptEmployee(item.workApplicantIndex)}
              acceptance={acceptance}
              name={item.name}
              email={item.email}
              phone={item.phone}
            />
          ))}
        {requestList.length === 0 && (
          <div className="noSchedule">신청 사원이 없습니다.</div>
        )}
      </div>
    </ListForm>
  );
};

const ListForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .noSchedule {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #858585;
  }
  @media all and (min-width: 768px) {
    width: 320px;
  }
`;

export default RequestEmployee;
