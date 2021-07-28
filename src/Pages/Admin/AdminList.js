import React from 'react';
import { useSelector } from 'react-redux';
import { ListArticle, ListDetail } from '../../Components/List';

const AdminList = () => {
  const { dataList } = useSelector(state => state.admin);
  if (!dataList) {
    console.log('loading...');
  } else {
    dataList.map(it => console.log(it.companyName));
  }
  return (
    <>
      {!dataList ? (
        <>
          {/* <div>loading...</div> */}
          <ListArticle />
          <ListDetail />
        </>
      ) : (
        // <div>{dataList.map(it => it.companyName)}</div>
        <ListArticle />
      )}
    </>
  );
};

export default AdminList;
