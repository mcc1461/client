import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';


export default function Header() {
    return (
        <header>
        <NavLink to="/" className='logo'> Mcc-Blog </NavLink>
        <nav>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/register">Register</NavLink>
        </nav>
      </header>
    );
}

