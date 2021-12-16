import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Cookies from 'universal-cookie/es6';
import { LOCAL_HOST } from '../Lib/constant';
import { actions } from '../Store/user';

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
    .catch(error => console.log('error'));
}

// accessToken request header 설정
export function setAccessToken(accessToken) {
  axios.defaults.headers.common['Authorization'] = accessToken;
}

export function signOut() {
  window.localStorage.setItem('logout', Date.now().toString());
  window.localStorage.removeItem('userIndex');
  window.localStorage.removeItem('companyIndex');
  cookies.remove('refreshToken');
  console.log('this is logout');
}
