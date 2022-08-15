import React, { useState, useEffect } from 'react';
import './Header.css';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo/Logo';
import UnauthLinks from '../UnauthLinks/UnauthLinks';
import Navigation from '../Navigation/Navigation';

export default function Header() {
  const [loggedIn, setLoggedIn] = useState(true);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      setLoggedIn(false);
    }
  }, [location]);

  return (
    <header className="header">
      <Logo />
      {loggedIn ? <Navigation /> : <UnauthLinks />}
    </header>
  );
}
