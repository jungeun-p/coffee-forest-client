import axios from 'axios';
import { call, takeEvery, put } from 'redux-saga/effects';
import { LOCAL_HOST } from '../../Lib/constant';
import { actions, Types } from '../work';

function acceptApi(indexData) {
  return axios
    .patch(
      `${LOCAL_HOST}schedule-applicant/${indexData.scheduleIndex}`,
      indexData
    )
    .then(response => {
      const statusAccept = response.status;
      return { statusAccept };
    })
    .catch(error => {
      const errorAccept = error.response.data;
      return {
        errorAccept
      };
    });
}

function rejectApi(indexData) {
  return axios
    .delete(`${LOCAL_HOST}schedule-applicant/${indexData.scheduleIndex}`, {
      data: indexData
    })
    .then(response => {
      const statusReject = response.status;
      return { statusReject };
    })
    .catch(error => {
      const errorReject = error.response;
      return {
        errorReject
      };
    });
}

function listApi(workIndex) {
  return axios
    .post(`${LOCAL_HOST}schedule-applicant`, workIndex)
    .then(response => {
      const workList = response.data;
      return {
        workList
      };
    })
    .catch(error => {
      const errorMessage = error.response.data;
      return {
        errorMessage
      };
    });
}

function* settleAccpet({ indexData }) {
  const { statusAccept } = yield call(acceptApi, indexData);
  if (statusAccept) {
    yield put(actions.workAcceptSuccess(statusAccept));
  }
}

function* settleReject({ indexData }) {
  const { statusReject } = yield call(rejectApi, indexData);
  if (statusReject) {
    yield put(actions.workRejectSuccess(statusReject));
  }
}

function* list({ workIndex }) {
  const { workList } = yield call(listApi, workIndex);
  if (workList) {
    yield put(actions.workListSuccess(workList));
  }
}

export default function* watchWork() {
  yield takeEvery(Types.RequestWorkList, list);
  yield takeEvery(Types.WorkAccept, settleAccpet);
  yield takeEvery(Types.WorkReject, settleReject);
}
