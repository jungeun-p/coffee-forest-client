import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { TitleB } from '../../Components/Common';
import { ListArticle } from '../../Components/List';

const RequestEmployee = ({ LoadRequestList, AcceptEmployee }) => {
  const acceptance = 'allow';
  const { requestList } = useSelector(state => state.employee);
  console.log(requestList);
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
              onClick={() => AcceptEmployee(item.workApplicantIndex)}
              // onClick={AcceptEmployee}
              key={item.workApplicantIndex}
              acceptance={acceptance}
              name={item.name}
              email={item.email}
              phone={item.phone}
            />
          ))}
      </div>
    </ListForm>
  );
};

const ListForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .list {
    width: 320px;
  }
`;

export default RequestEmployee;
