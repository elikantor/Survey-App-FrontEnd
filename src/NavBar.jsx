import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = (props) => {

    return (
      <ul className="nav">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        {!props.token ? <li>
          <NavLink to="/login">Login</NavLink>
        </li> : null }
        {!props.token ? <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li> : null }
        {props.token ? <li>
          <NavLink to="/profile">Profile</NavLink>
        </li> : null }
        {props.token ? <li>
          <button onClick={props.signout}>Sign Out</button>
        </li> : null }
      </ul>
    )

}

export default NavBar;