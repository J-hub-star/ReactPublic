import './App.css';
import React, {Component} from 'react';
import HomePage from '../src/pages/homepage/homepage.component.jsx';
import Shop from '../src/pages/shoppage/Shop.component.jsx';
import {Route,Switch, Redirect} from 'react-router-dom';
import Authentication from '../src/pages/authentication/Authentication.jsx';
import Header from './component/header/Header.jsx';
import {auth} from '../src/firebase/firebase.utlis';
import {createUserProfileDocument}from '../src/firebase/firebase.utlis';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    console.log(setCurrentUser)
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div>
      <Header />
      <Switch>

        <Route exact path='/' component={HomePage} />
        <Route  path='/shop' component={Shop} />
        <Route
            exact
            path='/auth'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <Authentication />
              )
            }
          />
        
      </Switch>
    </div>
  );}
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
