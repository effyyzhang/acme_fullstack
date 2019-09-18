import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../store';

const Users = ({ users, destroyUser, updateUser })=> {
  return (
    <ul>
      {
        users.map( user => <li key={ user.id }>
          { user.name }
          <button onClick={()=> destroyUser(user)}>x</button>
          <button onClick={()=> updateUser(user)}>Make {(user.active)? 'Inactive': 'Active'}</button>
        </li>)
      }
    </ul>
  );
};

export default connect(({ users })=> {
  return {
    users
  };
}, (dispatch)=> {
  return {
    destroyUser: (user)=> dispatch(actions.destroyUser(user)),
    updateUser: (user)=> dispatch(actions.updateUser(user))

  };
})(Users);
