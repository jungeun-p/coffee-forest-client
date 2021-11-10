import axios from 'axios';
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
      const status = error.response.data.value;
      if (status === 401) {
      }
    });
}
