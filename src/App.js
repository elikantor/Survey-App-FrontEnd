import React from 'react';
import './App.css';
import Home from './Home'
// import Input from './semanticUI/input'
import NavBar from './NavBar'
import LogIn from './LogIn'
import SignUp from './SignUp'
import ProfilePage from './ProfilePage'
import {Switch, Route} from 'react-router'
import {withRouter} from 'react-router-dom'

class App extends React.Component {
  
  state = {
    survey_creator: {
        id: 0,
        username: "",
        surveys: []
    },
    token: ""
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem("token")

      fetch("http://localhost:3000/persist", {
        headers: {
          "Authorization": `bearer ${token}`
        }
      })
      .then(r => r.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token)
          this.setState({
            survey_creator: data.survey_creator,
            token: data.token
          }, () => {
            this.props.history.push("/profile")
          })
        }
      })
    }
  }


  login = (userinfo) => {

    fetch("http://localhost:3000/login", {
        method: 'POST', 
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
          userinfo
        )
    })
    .then(r => r.json())
    .then(data => {
        console.log(data)
        if (!data.error) {
            localStorage.setItem("token", data.token)
            this.setState({
                survey_creator: data.survey_creator,
                token: data.token
            }, () => { this.props.history.push("/profile")})
        }
    })
  }

  signup = (userinfo) => {
    fetch("http://localhost:3000/survey_creators", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(
            {userinfo}
        )
    })
    .then(r=>r.json())
    .then(data => {
        if (!data.error) {
            localStorage.setItem("token", data.token)
            this.setState({
                survey_creator: data.survey_creator,
                token: data.token
            })
        }
    })
  }





  render(){
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/login" exact render={()=> <LogIn login={this.login}/> } />
          <Route path="/signup" exact render={()=> <SignUp signup={this.signup}/>} />
          <Route path="/profile" render={ ()=> <ProfilePage survey_creator={this.state.survey_creator}/> } />
          <Route path="/" exact render={() => <Home /> } />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
          )
  }

}

export default withRouter(App);
