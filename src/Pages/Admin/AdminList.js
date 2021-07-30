import React from 'react';
import { useSelector } from 'react-redux';
import { ListArticle, ListDetail } from '../../Components/List';

const AdminList = ({ LoadDetail, onClick }) => {
  const acceptance = 'allow';
  const { dataList } = useSelector(state => state.admin);
  if (!dataList) {
    console.log('loading...');
  } else {
    // dataList.map((it, index) => console.log(index));
  }
  return (
    <div>
      {!dataList ? (
        <div>loading...</div>
      ) : (
        <div>
          {dataList.map((it, index) => (
            <ListArticle
              onClick={LoadDetail}
              // onClick={onClick}
              key={index}
              name={it.userName}
              phone={it.phone}
              email={it.email}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminList;
