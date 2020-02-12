import React from 'react';
import './App.css';
import Home from './Home'
// import Input from './semanticUI/input'
import NavBar from './NavBar'
import LogIn from './LogIn'
import SignUp from './SignUp'
import {Switch, Route} from 'react-router'
import {withRouter} from 'react-router-dom'



class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/login" exact render={()=> <LogIn/> } />
          <Route path="/signup" exact render={()=> <SignUp/> } />
          <Route path="/profile" render={ this.renderProfile } />
          <Route path="/" exact render={() => <Home /> } />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
          )
  }

}

export default withRouter(App);
