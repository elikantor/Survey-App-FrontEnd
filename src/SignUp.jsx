import React from 'react';

class SignUp extends React.Component {

    state = {
        username: "",
        password: "",
        token: "",
        survey_creator: ""
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
            body: JSON.stringify(
                this.state
            )
        })
        .then(r=>r.json())
        .then(console.log)
            // data => {
            // if (!data.error) {
            //     localStorage.setItem("token", data.token)
            //     this.setState({
            //         survey_creator: data.sur
            //     })
            // }
        // })
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