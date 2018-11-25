import {
  TODOS_FETCH_START,
  TODOS_FETCH_SUCCESS,
  TODOS_FETCH_ERROR
} from '../constants/ActionTypes';
import { call ,put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';

export function* fetchTodos(action) {
  try {
     const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos');
     const todos = response.data.slice(0, 20);
     yield put({type: TODOS_FETCH_SUCCESS, payload: todos});
  } catch (error) {
     yield put({type: TODOS_FETCH_ERROR, payload: error});
  }
}

function* watchFetchTodos() {
  yield takeLatest(TODOS_FETCH_START, fetchTodos);
}

export default function* rootSaga() {
  yield all([
    watchFetchTodos(),
  ]);
}