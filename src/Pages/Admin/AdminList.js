import React from 'react';
import { useSelector } from 'react-redux';
import { ListArticle } from '../../Components/List';

const AdminList = ({ LoadDetail }) => {
  const { dataList } = useSelector(state => state.admin);
  if (!dataList) {
    console.log('loading...');
  } else {
    console.log(dataList);
    // dataList.map((it, index) => console.log(index));
  }
  return (
    <div>
      {dataList ? (
        <div>
          {dataList.map((it, index) => (
            <ListArticle
              onClick={LoadDetail}
              key={index}
              name={it.userName}
              phone={it.phone}
              email={it.email}
            />
          ))}
        </div>
      ) : (
        <div>loading...</div>
      )}
      {dataList.length === 0 && <div>신청된 회사가 없습니다.</div>}
    </div>
  );
};

export default AdminList;
