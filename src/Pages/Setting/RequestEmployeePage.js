import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { TitleB } from '../../Components/Common';
import { ListArticle } from '../../Components/List';

const RequestEmployee = ({ LoadRequestList, ApplyEmployee }) => {
  const acceptance = 'allow';
  const { requestList } = useSelector(state => state.employee);

  useEffect(() => {
    LoadRequestList();
    console.log(requestList);
  }, [LoadRequestList]);

  return (
    <ListForm>
      <TitleB>사원 수락 대기</TitleB>
      <div className="list">
        {requestList &&
          requestList.map(item => (
            <ListArticle
              onClick={ApplyEmployee}
              key={item.workApplicantIndex}
              acceptance={acceptance}
              name={item.name}
              email={item.email}
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
