import { combineReducers } from 'redux';
import { SET_USERS, SET_LOADING, SET_ERROR, DESTROY_USER, UPDATE_USER, CREATE_USER } from './constants';

const loadingReducer = (state = false, action) => {
  if (action.type === SET_LOADING) {
    return action.loading;
  }
  return state;
};

const errorReducer = (state = '', action) => {
  if (action.type === SET_ERROR) {
    return action.error.message
  }
  return state
}

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    case DESTROY_USER:
      return state.filter(user => user.id !== action.user.id);
    case UPDATE_USER:
      return state.map(user => (user.id === action.user.id) ? action.user : user);
    case CREATE_USER:
      return [...state, action.user]
    default:
      return state;
  }
};

const reducer = combineReducers({
  loading: loadingReducer,
  users: usersReducer,
  error: errorReducer
});

export default reducer;
