import axios from 'axios';
import { getAccessToken } from '../Hooks/auth';
// import Cookies from 'universal-cookie/es6';
// import { getAccessToken, setAccessToken } from '../Hooks/auth';
import { LOCAL_HOST } from '../Lib/constant';

export function callApi({ method = 'get', url, params, data }) {
  return axios({
    url,
    method,
    baseURL: LOCAL_HOST,
    params,
    data
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
      return {
        status
      };
    });
}
