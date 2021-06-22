import axios from 'axios';
import { LOCAL_HOST } from '../Lib/constant';

/**
 *
 * @param {object} param
 * @param {'get' | 'post' =} param.method
 * @param {string} param.url
 * @param {object=} param.params
 * @param {object=} param.data
 */

export const callApi = ({ method = 'get', url, params, data }) => {
  return axios({
    url,
    method,
    baseURL: LOCAL_HOST,
    params,
    data,
    withCredentials: true
  }).then(response => {
    const { resultCode, resultMessage } = response.data;
    if (resultCode < 0) {
      console.log(resultMessage);
    }
    return {
      isSuccess: resultCode === resultCode.Success,
      data: response.data.data,
      resultCode,
      resultMessage
    };
  });
};

export const resultCode = {
  Success: 0
};
