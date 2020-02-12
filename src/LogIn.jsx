import React from 'react';

class LogIn extends React.Component {

    state = {
        username: "",
        password: ""
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    login = () => {
        console.log("login form has been submitted")
        console.log(this.state)
        fetch("http://localhost:3000/login", {
            method: 'POST', 
            headers: { 
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                this.state
            )
        })
        .then(r => r.json())
        .then(console.log)
    }
  render(){
    return (
        <div>
            Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            <button onClick={this.login}>Log In</button>
        </div>
    )
  }

}

export default LogIn;