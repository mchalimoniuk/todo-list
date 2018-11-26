import {
  TODOS_FETCH_START,
  TODOS_FETCH_SUCCESS,
  TODOS_FETCH_ERROR,
  TODOS_CHANGE_DONE_SUCCESS,
  TODOS_CHANGE_DONE_ERROR,
  TODOS_DELETE_SUCCESS,
  TODOS_DELETE_ERROR,
  TODOS_CREATE_SUCCESS,
  TODOS_CREATE_ERROR,
  TODOS_NEW_TODO_TITLE_CHANGE,
} from '../constants/ActionTypes';

import { toast } from 'react-toastify';

const defaultState = {
  todos: [],
  fetchPending: false,
  fetchError: null,
  newTodoTitle: '',
};

export default function(state = defaultState, action) {
  switch(action.type) {
    case TODOS_FETCH_START: {
      return { ...state, fetchPending: true, fetchError: null };
    }
    case TODOS_FETCH_SUCCESS: {
      return { ...state, fetchPending: false, todos: action.payload, fetchError: null };
    }
    case TODOS_FETCH_ERROR: {
      return { ...state, fetchPending: false, fetchError: action.payload };
    }
    case TODOS_CHANGE_DONE_SUCCESS: {
      const todos = state.todos.map(todo => {
        return todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
      return { ...state, todos };
    }
    case TODOS_CHANGE_DONE_ERROR: {
      toast.error(`Wystąpił błąd podczas zmiany zadania "${action.payload}"`, {
        position: toast.POSITION.BOTTOM_CENTER
      });
      return state;
    }
    case TODOS_DELETE_SUCCESS: {
      const todos = state.todos.filter(todo => {
        return todo.id !== action.payload
      });
      return { ...state, todos };
    }
    case TODOS_DELETE_ERROR: {
      toast.error(`Wystąpił błąd podczas usuwania zadania "${action.payload}"`, {
        position: toast.POSITION.BOTTOM_CENTER
      });
      return state;
    }
    case TODOS_CREATE_SUCCESS: {
      const todos = [ ...state.todos, action.payload ];
      return { ...state, todos, newTodoTitle: '' };
    }
    case TODOS_CREATE_ERROR: {
      toast.error('Wystąpił błąd podczas tworzenia nowego zadania', {
        position: toast.POSITION.BOTTOM_CENTER
      });
      return state;
    }
    case TODOS_NEW_TODO_TITLE_CHANGE: {
      const newTodoTitle = action.payload;
      return { ...state, newTodoTitle };
    }
    default: {
      return state;
    }
  }

}