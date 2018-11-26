import {
  TODOS_FETCH_START,
  TODOS_FETCH_SUCCESS,
  TODOS_FETCH_ERROR,
  TODOS_CHANGE_DONE_START,
  TODOS_CHANGE_DONE_SUCCESS,
  TODOS_CHANGE_DONE_ERROR,
  TODOS_DELETE_START,
  TODOS_DELETE_SUCCESS,
  TODOS_DELETE_ERROR,
  TODOS_CREATE_START,
  TODOS_CREATE_SUCCESS,
  TODOS_CREATE_ERROR,
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

export function* changeTodoDone(action) {
  try {
    const todoId = action.payload.id;
    yield call(axios.put, `https://jsonplaceholder.typicode.com/todos/${todoId}`, action.payload);
    yield put({type: TODOS_CHANGE_DONE_SUCCESS, payload: todoId});
  } catch (error) {
    yield put({type: TODOS_CHANGE_DONE_ERROR, payload: error});
  }
}

export function* deleteTodo(action) {
  try {
    yield call(axios.delete, `https://jsonplaceholder.typicode.com/todos/${action.payload}`);
    yield put({type: TODOS_DELETE_SUCCESS, payload: action.payload});
  } catch (error) {
    yield put({type: TODOS_DELETE_ERROR, payload: error});
  }
}

export function* createTodo(action) {
  try {
    const newTodo = {
      completed: false,
      title: action.payload,
      userId: 1,
    };
    const response = yield call(axios.post, `https://jsonplaceholder.typicode.com/todos`, newTodo);
    const createdTodo = response.data;
    yield put({type: TODOS_CREATE_SUCCESS, payload: createdTodo});
  } catch (error) {
    yield put({type: TODOS_CREATE_ERROR, payload: error});
  }
}

function* watchFetchTodos() {
  yield takeLatest(TODOS_FETCH_START, fetchTodos);
}

function* watchChangeTodoDone() {
  yield takeEvery(TODOS_CHANGE_DONE_START, changeTodoDone);
}

function* watchDeleteTodo() {
  yield takeEvery(TODOS_DELETE_START, deleteTodo);
}

function* watchCreateTodo() {
  yield takeEvery(TODOS_CREATE_START, createTodo);
}

export default function* rootSaga() {
  yield all([
    watchFetchTodos(),
    watchChangeTodoDone(),
    watchDeleteTodo(),
    watchCreateTodo(),
  ]);
}