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

  render(){
    return (
        <div>
            Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
            Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
            <button onClick={()=>this.props.signup(this.state)}>Sign Up</button>
        </div>
    )
  }

}

export default SignUp;