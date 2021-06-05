import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/undraw_business_shop_qw5t.svg';

import './header.style.scss';

const Header = () => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo></Logo>
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      <Link className='option' to='/auth'>
        SIGN UP/SIGN IN
      </Link>
     
    </div>
  </div>
);

export default Header;