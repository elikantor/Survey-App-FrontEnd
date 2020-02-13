import React from 'react';
import {NavLink} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const NavBar = () => {

    return (
      <Menu>
        {/* <ul className="nav"> */}
         <Menu.Item> <NavLink to="/">Home</NavLink>  </Menu.Item> 
       
         <Menu.Item> <NavLink to="/login">Login</NavLink>  </Menu.Item>
        
         <Menu.Item>   <NavLink to="/signup">Sign Up</NavLink> </Menu.Item> 
       
        {/* <li>
          <NavLink to="/profile">Profile</NavLink>
        </li> */}
      {/* </ul> */}
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