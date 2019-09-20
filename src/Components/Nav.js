import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({ count, activeCount, location: { pathname } }) => {
  return (
    <div>
      <h1>The Acme Users</h1>
      <nav>
        <Link to='/' className={pathname === '/' ? 'active' : ''}>Home</Link>
        <Link to='/users' className={pathname === '/users' ? 'active' : ''}>Users({count})</Link>
        <Link to='/users/active' className={pathname === '/users/active' ? 'active' : ''}>Active Users({activeCount})</Link>
        <Link to='/users/create' className={pathname === '/users/create' ? 'active' : ''}>Create A User</Link>
      </nav>
    </div>
  );
};

const mapStateToProps = ({ users }) => {
  const activeCount = users.filter(_user => _user.active).length;
  return {
    count: users.length,
    activeCount
  };
};

export default connect(mapStateToProps)(Nav);


