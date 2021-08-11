import axios from 'axios';
import { call, takeEvery, put } from 'redux-saga/effects';
import { LOCAL_HOST } from '../../Lib/constant';
import { actions, Types } from '../work';

function acceptApi({ index, scheduleIndex }) {
  return axios
    .patch(`${LOCAL_HOST}schedule-applicant${scheduleIndex}`, index)
    .then(response => {
      const statusAccept = response.data;
      return { statusAccept };
    })
    .catch(error => {
      const errorAccept = error.response.data;
      return {
        errorAccept
      };
    });
}

function rejectApi({ index, scheduleIndex }) {
  return axios
    .delete(`${LOCAL_HOST}schedule-applicant${scheduleIndex}`, index)
    .then(response => {
      const statusReject = response.data;
      return { statusReject };
    })
    .catch(error => {
      const errorReject = error.response.data;
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

function* settle({ index, scheduleIndex }) {
  const { statusAccept, errorAccept } = yield call(acceptApi, {
    index,
    scheduleIndex
  });
  const { statusReject, errorReject } = yield call(rejectApi, {
    index,
    scheduleIndex
  });
  if (statusAccept) {
    yield put(actions.workAcceptSuccess(statusAccept));
  } else if (statusReject) {
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
  yield takeEvery((Types.WorkAccept, Types.workReject), settle);
}
