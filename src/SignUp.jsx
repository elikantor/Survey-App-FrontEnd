import React from 'react';

class SignUp extends React.Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    signup = () => {
        fetch("http://localhost:3000/survey_creators", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
    }

  render(){
    return (
        <div>
            Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            <button onClick={this.signup}>Sign Up</button>
        </div>
    )
  }

}

export default SignUp;