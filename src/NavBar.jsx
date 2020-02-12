import React from 'react';

class NavBar extends React.Component {


  render(){
    return (
        <div>
            <button onClick={this.props.login}> Log In </button>
            <button onClick={this.props.signup}> Sign Up </button>
            <button onClick={this.signup}> Create a Survey </button>
            <button onClick={this.signup}> Fill Out a Survey </button>
        </div>
    )
  }

}

export default NavBar;