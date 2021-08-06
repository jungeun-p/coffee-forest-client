import React from 'react';
import { ListArticle } from '../../Components/List';

const AdminList = ({ LoadDetail, dataList }) => {
  return (
    <div>
      {dataList ? (
        <div>
          {dataList.map((it, index) => (
            <ListArticle
              onClick={() => LoadDetail(it.index)}
              key={it.index}
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
