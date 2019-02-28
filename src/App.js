import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {connect} from 'react-redux'
import updateUser from './actions/user-actions'

class App extends Component {

  onUpdateUser=()=>{
    this.props.onUpdateUser('Dileep')
  }

  render() {
    console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to React-Redux</h1>
          <div onClick={this.onUpdateUser}>UpdateUser</div>
          {this.props.user}
          
        </header>
        
      </div>
    );
  }
}

const mapStateToProps=state=>({
  products: state.products,
  user: state.user
});

const mapActionsToProps={
  onUpdateUser: updateUser
};

export default connect(mapStateToProps, mapActionsToProps)(App);
