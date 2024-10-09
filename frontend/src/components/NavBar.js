import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'; // Adjust the path if necessary
import "./Style.css"; // Ensure this contains the correct styles
import { navItems } from './NavItems';

function NavBar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={Logo} alt="Logo" height="50" /> {/* Include the logo image here */}
        </Link>

        <ul className='nav-items'>
          {navItems.map((item) => {
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        
        <Link to='/login'>
            <button className='btn'>Sign in</button>
        </Link>
      </nav>
    </>
  );
}

export default NavBar;
