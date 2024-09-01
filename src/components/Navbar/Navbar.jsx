import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/images/logo.jpg'

const menuItems = [
  {
    id: 'home',
    text: 'Home'
  },
  {
    id: 'menu',
    text: 'Menu'
  },
  {
    id: 'contact',
    text: 'Contact us'
  }
];
const Navbar = () => {

  const [menu, setMenu] = useState({
    id: 'home',
    text: 'Home'
  });

  function onMenuItemClick(menu) {
    setMenu(menu);
  }

  return (
    <div className='navbar'>
      <img src={logo} alt="" className="logo" />
      <ul className='navbar-menu'>
        {
          menuItems.map(item => {
            return <li key={item.id} 
              className={'navbar-menu-item ' + (menu.id === item.id ? 'active-menu' : '')}
              onClick={() => onMenuItemClick(item)}>
              {item.text} 
            </li>
          })
        }
      </ul>
      <div className="navbar-right">
        <button>
          sign in
        </button>
      </div>
    </div>
  )
}

export default Navbar