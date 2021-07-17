import React from 'react';
import styled from 'styled-components';

const TabPage = ({ obj, tab }) => {
  return <CategoryPage>{obj[tab.activeId]}</CategoryPage>;
};
const CategoryPage = styled.div``;
export default TabPage;
