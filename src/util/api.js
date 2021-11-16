import axios from 'axios';
import Cookies from 'universal-cookie/es6';
import { LOCAL_HOST } from '../Lib/constant';

export function callApi({ method = 'get', url, params, data }) {
  return axios({
    url,
    method,
    baseURL: LOCAL_HOST,
    params,
    data
    // 사용자 인증을 위해 쿠키로 토큰을 저장
    // withCredentials: true
  })
    .then(response => {
      const { resultCode, resultMessage } = response.data;
      if (resultCode < 0) {
        console.log(resultMessage);
      }
      return {
        //   isSuccess: resultCode === ResultCode.Success,
        data: response.data,
        resultCode,
        resultMessage
      };
    })
    .catch(error => {
      console.log(error.response);
      // const status = error.response.data.value;
      // if (status === 401) {
      //   console.log('401 error');
      //   returnAT();
      // }
    });
}

// const cookies = new Cookies();
// function returnAT() {
//   const index = {
//     userIndex: localStorage.getItem('userIndex'),
//     refreshToken: cookies.get('refreshToken')
//   };
//   return axios
//     .patch(`${LOCAL_HOST}refresh`, index)
//     .then(response => {
//       const { accessToken } = response.data;
//       // cookies.set('refreshToken', refreshToken, {
//       //   sameSite: 'strict'
//       // });
//       axios.defaults.headers.common['Authorization'] = accessToken;
//     })
//     .catch(error => {
//       console.log(error.response.data);
//     });
// }
