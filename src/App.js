import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state= {
      currentUser: null
    }
  }

  unsubribeFromAuth = null;

  componentDidMount() {
    this.unsubribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
      if (userAuth){
        const userRef = createUserProfileDocument(userAuth);
        (await userRef).onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      } else {
        this.setState({currentUser: null});
      }
    });
  }

  componentWillUnmount() {
    this.unsubribeFromAuth();
  }

  render() {
    return (
      <div> 
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  
  }
}

export default App;
