import {
  TODOS_FETCH_START,
  TODOS_FETCH_SUCCESS,
  TODOS_FETCH_ERROR,
  TODOS_CHANGE_DONE_START,
  TODOS_CHANGE_DONE_SUCCESS,
  TODOS_CHANGE_DONE_ERROR,
} from '../constants/ActionTypes';
import { call ,put, takeLatest, takeEvery, all } from 'redux-saga/effects';
import axios from 'axios';

export function* fetchTodos(action) {
  try {
     const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos');
     const todos = response.data.slice(0, 10);
     yield put({type: TODOS_FETCH_SUCCESS, payload: todos});
  } catch (error) {
     yield put({type: TODOS_FETCH_ERROR, payload: error});
  }
}

function* watchFetchTodos() {
  yield takeLatest(TODOS_FETCH_START, fetchTodos);
}

export function* changeTodoDone(action) {
  try {
    const todoId = action.payload.id;
    yield call(axios.put, `https://jsonplaceholder.typicode.com/todos/${todoId}`, action.payload);
    yield put({type: TODOS_CHANGE_DONE_SUCCESS, payload: todoId});
  } catch (error) {
    yield put({type: TODOS_CHANGE_DONE_ERROR, payload: error});
  }
}

function* watchChangeTodoDone() {
  yield takeEvery(TODOS_CHANGE_DONE_START, changeTodoDone);
}



export default function* rootSaga() {
  yield all([
    watchFetchTodos(),
    watchChangeTodoDone(),
  ]);
}