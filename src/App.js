import './App.css';
import React, {Component} from 'react';
import HomePage from '../src/pages/homepage/homepage.component.jsx';
import Shop from '../src/pages/shoppage/Shop.component.jsx';
import {Route,Switch} from 'react-router-dom';
import Authentication from '../src/pages/authentication/Authentication.jsx';
import Header from './component/header/Header.jsx';
import {auth} from '../src/firebase/firebase.utlis';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div>
      <Header currentUser = {this.state.currentUser}/>
      <Switch>

        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={Shop} />
        <Route exact path='/auth' component={Authentication} />
        
      </Switch>
    </div>
  );}
}

export default App;
