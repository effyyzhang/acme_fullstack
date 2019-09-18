import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Nav = ({ count, activeCount, location: { pathname } })=> {
  return (
    <div>
      <h1>The Acme Users</h1>
      <nav>
        <Link to='/' className={ pathname === '/' ? 'active': ''}>Home</Link>
        <Link to='/users' className={ pathname === '/users' ? 'active': ''}>Users({ count })</Link>
        <Link to='/filter/active' className={ pathname === '/active' ? 'active': ''}>Active Users({ activeCount })</Link>

      </nav>
    </div>
  );
};

const mapStateToProps = ({ users }, otherProps)=> {
  console.log(otherProps)
  return {
    count: users.length,
    activeCount: users.filter(_user => _user.active).length
  };
};

export default connect(mapStateToProps)(Nav);


