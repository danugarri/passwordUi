import React from 'react';
import logo from '../../assets/img/logo_openbank.png';
import './OpenBankLogo.scss';

export const OpenBankLogo = () => {
  return (
    <nav>
      <img alt='logo' src={logo} id='logo' />
    </nav>
  );
};
