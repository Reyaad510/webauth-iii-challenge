import React from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Users from './Users';


class App extends React.Component {



  render() {
  return (
    <div>

      <h1> Howdy There! :)</h1>

      <ul>
        <li><NavLink to='/login'>Login</NavLink></li>
        <li><NavLink to='/signup'>Signup</NavLink></li>
        <li><NavLink to='/users'>Users</NavLink></li>
        <li><button>Logout</button></li>
      </ul>

      <div>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route path='/users' component={Users} />
      </div>

    </div>
    )
  }
}

export default withRouter(App);
