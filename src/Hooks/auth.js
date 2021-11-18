import axios from 'axios';
import Cookies from 'universal-cookie/es6';
import { LOCAL_HOST } from '../Lib/constant';

const cookies = new Cookies();

// refreshToken 쿠키 저장
export function setRefreshToken(refreshToken) {
  cookies.set('refreshToken', refreshToken, { sameSite: 'strict' });
}

// 새 accessToken 발급
export function getAccessToken() {
  // token 유효성도 체크하기
  // const refreshToken = cookies.get('refreshToken');
  // if (refreshToken) {
  const index = {
    userIndex: localStorage.getItem('userIndex'),
    refreshToken: cookies.get('refreshToken')
  };
  return axios
    .patch(`${LOCAL_HOST}refresh`, index)
    .then(response => {
      const { accessToken } = response.data;
      setAccessToken(accessToken);
      return {
        accessToken
      };
    })
    .catch(error => console.log(error.response.data));
}

// accessToken request header 설정
export function setAccessToken(accessToken) {
  console.log('setAccessToken', accessToken);
  axios.defaults.headers.common['Authorization'] = accessToken;
}
