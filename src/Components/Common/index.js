import styled from 'styled-components';
import TitleB from './Title';
import BackgroundImg from '../../assets/Img/background/BackgraoundImg.png';
// page의 전체를 잡아주는 container

export const ContainerRoot = styled.main`
  position: relative;
  display: flex;
  padding: 0;
  flex-direction: column;
  top: 0;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  /* margin-left: auto;
  margin-right: auto; */
  flex: 1;
  /* background-image: url(${BackgroundImg});
  background-repeat: no-repeat;
  background-size: 30vw auto;
  background-position: right bottom;
  background-attachment: fixed; */
  @media all and (min-width: 768px) {
    background-size: 25vw auto;
    background-image: url(${BackgroundImg});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-attachment: fixed;
  }
`;

// ContainerRoot 하위 Wrapper

export const ContentsWrapper = styled.div`
  padding: 50px 28px 0px 28px;
  /* @media all and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  } */
`;

export { TitleB };
