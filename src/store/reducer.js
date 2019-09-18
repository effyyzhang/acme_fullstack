import { combineReducers } from 'redux';
import { SET_USERS, SET_LOADING, DESTROY_USER, UPDATE_USER } from './constants';

const loadingReducer = (state = false, action)=> {
  if(action.type === SET_LOADING){
    return action.loading;
  }
  return state;
};

const usersReducer = (state = [], action)=> {
  switch(action.type){
    case SET_USERS:
      return action.users;
      break;
    case DESTROY_USER:
      return state.filter(user => user.id !== action.user.id);
      break;
    case UPDATE_USER:
      return state.map(user => (user.id === action.user.id)? action.user : user);
  }
  return state;
};

const reducer = combineReducers({
  loading: loadingReducer,
  users: usersReducer
});

export default reducer;
