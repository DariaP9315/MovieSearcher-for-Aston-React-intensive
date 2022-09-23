import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Menu from '../Menu/Menu';
import Auth from '../Auth/Auth';
import logo from '../../images/logo.svg';
import { Account } from '../Account/Account';
import { isUserAuth } from '../../store/slices/userSlice';
import { useSelector } from 'react-redux';

export default function Header() {
  const isAuth = useSelector(isUserAuth);

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="логотип" />
      </Link>
      <div className="header__menu-account">
        <Menu />
        {isAuth ? <Account /> : <Auth />}
      </div>
    </header>
  );
}
