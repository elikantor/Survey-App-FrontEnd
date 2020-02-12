import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = () => {

    return (
        <ul className="nav">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
        // <div>
        //     <button onClick={this.props.login}> Log In </button>
        //     <button onClick={this.props.signup}> Sign Up </button>
        //     <button onClick={this.signup}> Create a Survey </button>
        //     <button onClick={this.signup}> Fill Out a Survey </button>
        // </div>
    )

}

export default NavBar;