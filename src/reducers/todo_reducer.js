import {
  TODOS_FETCH_START,
  TODOS_FETCH_SUCCESS,
  TODOS_FETCH_ERROR,
  TODOS_CHANGE_DONE_SUCCESS,
  TODOS_DELETE_SUCCESS,
} from '../constants/ActionTypes';

const defaultState = {
  todos: [],
  pending: false,
  error: null,
};

export default function(state = defaultState, action) {
  switch(action.type) {
    case TODOS_FETCH_START: {
      return { ...state, pending: true, error: null };
    }
    case TODOS_FETCH_SUCCESS: {
      return { ...state, pending: false, todos: action.payload, error: null };
    }
    case TODOS_FETCH_ERROR: {
      return { ...state, pending: false, error: action.payload };
    }
    case TODOS_CHANGE_DONE_SUCCESS: {
      const todos = state.todos.map(todo => {
        return todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo;
      });
      return { ...state, todos };
    }
    case TODOS_DELETE_SUCCESS: {
      const todos = state.todos.filter(todo => {
        return todo.id !== action.payload
      });
      return { ...state, todos };
    }
    default: {
      return state;
    }
  }

}