import React from 'react';
import {NavLink} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const NavBar = (props) => {

    return (
<Menu>
          <NavLink to="/">Home</NavLink>
        {!props.token ? <Menu.Item>
          <NavLink to="/login">Login</NavLink>
        </Menu.Item> : null }
        {!props.token ? <Menu.Item>
          <NavLink to="/signup">Sign Up</NavLink>
        </Menu.Item> : null }
        {props.token ? <Menu.Item>
          <NavLink to="/profile">Profile</NavLink>
        </Menu.Item> : null }
        {props.token ? <Menu.Item>
          <button onClick={props.signout}>Sign Out</button>
        </Menu.Item> : null }
        </Menu>
    )

}

export default NavBar;

// export default class MenuExampleBasic extends Component {
//   state = {}

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//   render() {
//     const { activeItem } = this.state

//     return (
//       <Menu>
//         <Menu.Item
//           name='editorials'
//           active={activeItem === 'editorials'}
//           onClick={this.handleItemClick}
//         >
//           Editorials
//         </Menu.Item>

//         <Menu.Item
//           name='reviews'
//           active={activeItem === 'reviews'}
//           onClick={this.handleItemClick}
//         >
//           Reviews
//         </Menu.Item>

//         <Menu.Item
//           name='upcomingEvents'
//           active={activeItem === 'upcomingEvents'}
//           onClick={this.handleItemClick}
//         >
//           Upcoming Events
//         </Menu.Item>
//       </Menu>
//     )
//   }
// }