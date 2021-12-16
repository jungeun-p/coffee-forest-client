import axios from 'axios';
import { LOCAL_HOST } from '../Lib/constant';

/**
 *
 * @param {object} param
 * @param {'get' | 'post' | 'delete' =} param.method
 * @param {string} param.url
 * @param {object=} param.params
 * @param {object=} param.data
 */

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
