import styled from 'styled-components';

// page의 전체를 잡아주는 container
export const ContainerRoot = styled.main`
  position: relative;
  display: flex;
  padding: 0;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  /* margin-left: auto;
  margin-right: auto; */
  flex: 1;
  /* @media all and (min-width: 768px) {
    padding: 0 10vw;
  } */
  background-color: #ffffff;
`;

// ContainerRoot 하위 Wrapper

export const ContentsWrapper = styled.div`
  padding: 50px 28px 0px 28px;
  /* @media all and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  } */
`;
