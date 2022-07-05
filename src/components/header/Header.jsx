import React from 'react';
import { OpenBankLogo } from '../openBankLogo/OpenBankLogo';
import { SelectLanguage } from '../selectLanguage/SelectLanguage';
import './Header.scss';

export const Header = () => {
  return (
    <header>
      <OpenBankLogo />
      <SelectLanguage />
    </header>
  );
};
