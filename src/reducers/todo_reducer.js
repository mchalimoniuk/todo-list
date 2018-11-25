import {
  TODOS_FETCH_START,
  TODOS_FETCH_SUCCESS,
  TODOS_FETCH_ERROR,
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
    default: {
      return state;
    }
  }

}