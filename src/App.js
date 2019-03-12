import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {createSelector} from 'reselect'
import {updateUser, apiRequest} from './actions/user-actions'

class App extends Component {

  /*componentDidMount(){
    setTimeout(()=>{
      this.props.onApiRequest();
    },1500);
  }*/
  onUpdateUser=(e)=>{
    this.props.onUpdateUser(e.target.value)
  }

  render() {
    console.log(this.props);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to React-Redux</h1>
          <input onChange={this.onUpdateUser}/>
          {this.props.user}
        </header>
        
      </div>
    );
  }
}

/*const mapStateToProps=(state, props)=>{
  return {
    products: state.products,
    user: state.user,
    userplusProps: `${state.user} ${props.aRandomProps}`
  }
  
};*/

/*const mapActionsToProps=(dispatch, props)=>{
  console.log(props)
  return bindActionCreators({
    onUpdateUser: updateUser
  }, dispatch)
  
};*/

const productsSelector=createSelector(
  state=>state.products,
  products=>products
);

const userSelector=createSelector(
  state=>state.user,
  user=>user
);

const mapStateToProps=createSelector(
  productsSelector,
  userSelector,
  (products, user)=>({
    products, 
    user
  })
);

const mapActionsToProps={
    onUpdateUser: updateUser,
    onApiRequest: apiRequest
};

export default connect(mapStateToProps, mapActionsToProps)(App);
