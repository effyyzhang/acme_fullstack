import { DESTROY_USER, SET_USERS, SET_LOADING, SET_ERROR, UPDATE_USER, CREATE_USER } from "./constants";
import axios from "axios";


const setLoading = loading => {
  return {
    type: SET_LOADING,
    loading
  };
};


const setError = error => {
  return {
    type: SET_ERROR,
    error
  };
};

const setUsers = users => {
  return {
    users,
    type: SET_USERS
  };
};

const _destroyUser = user => {
  return {
    type: DESTROY_USER,
    user
  };
};

const _updateUser = user => {
  return {
    type: UPDATE_USER,
    user
  };
};

const _createUser = user => {
  return {
    type: CREATE_USER,
    user
  }
}

const createUser = (user, history) => {
  return async dispatch => {
    dispatch(setLoading(true))
    try {
      const response = (await axios.post(`/api/users/`, user)).data;
      dispatch(_createUser(response))
      history.push('/users')
    } catch (e) {
      dispatch(setError(e));
    }
    dispatch(setLoading(false));
  }
}

const fetchUsers = () => {
  return async dispatch => {
    dispatch(setLoading(true));
    const users = (await axios.get("/api/users")).data;
    dispatch(setLoading(false));
    return dispatch(setUsers(users));
  };
};

const destroyUser = user => {
  return async dispatch => {
    dispatch(setLoading(true));
    await axios.delete(`/api/users/${user.id}`);
    dispatch(setLoading(false));
    return dispatch(_destroyUser(user));
  };
};

const updateUser = user => {
  return async dispatch => {
    dispatch(setLoading(true));
    const response = (await axios.put(`/api/users/${user.id}`, user)).data;
    dispatch(setLoading(false));
    return dispatch(_updateUser(response));
  };
};

export { fetchUsers, destroyUser, updateUser, createUser, setError };
