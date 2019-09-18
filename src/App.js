import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { actions } from './store';
import { connect } from 'react-redux'; 
import Nav from './Components/Nav';
import Users from './Components/Users';
import Create from './Components/Create';

class App extends Component{
  componentDidMount(){
    this.props.fetchUsers();
  }
  render(){
    const { loading } = this.props;
    return (
      <HashRouter>
        <Route component={ Nav } />
        {
          loading && <div>...loading</div>
        }
        <Route path='/filter/active' exact component={ Users } />
        <Route path='/users/create' exact component={ Create } />
        <Route path='/users' exact component={ Users } />
      </HashRouter>
    );
  }
} 

const mapDispatchToProps = (dispatch)=> {
  return {
    fetchUsers: ()=> dispatch(actions.fetchUsers())
  };
};

const mapStateToProps = ({loading})=> {
  return {
    loading
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
