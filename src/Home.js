import React from 'react';
import CreateSurveyContainer from './CreateSurveyContainer'
import NavBar from './NavBar'
import LogIn from './LogIn'
import SignUp from './SignUp'

class Home extends React.Component {

    state = {
        createSurvey: false,
        login: false,
        signup: false
    }

    login = () => {
     let newState = !this.state.login
     this.setState({
         login: newState
     })   
    }

    signup = () => {
        let newState = !this.state.signup
        this.setState({
            signup: newState
        })   
    }

    renderSurveyContainer = () => {
        let newState = !this.state.createSurvey
        this.setState({
            createSurvey: newState
        })
    }


  render(){
    return (
        <div>
            <NavBar login={this.login} signup={this.signup}/>
            {/* {Logo} */}
            {!this.state.login ? null : <LogIn />}
            {!this.state.signup ? null : <SignUp />}
            <button onClick={this.renderSurveyContainer}> Sign in to Create Survey </button>
            {!this.state.createSurvey ? null : <CreateSurveyContainer/>}

        </div>
    )
  }

}

export default Home;