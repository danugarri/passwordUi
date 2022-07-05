import React from 'react';
import { useTranslation } from 'react-i18next';

import OpenbankLogo from './assets/img/key_openbank.png';
import Step1 from './views/ProductInformation';
import Step2 from './views/Form';
import Step3 from './views/Feedback';
import supportedLanguages from './locales/index';

import './App.scss';

const App = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = ({ target }) => {
    i18n.changeLanguage(target.value);
    console.log(target.value);
  };
  return (
    <div className='App'>
      <main className='App-content'>
        <p>{t('title')}</p>
        <label htmlFor='languageSelected'>Idioma</label>
        <select name='languageSelected' onChange={changeLanguage} value={i18n.language}>
          {Object.keys(supportedLanguages).map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </main>
    </div>
  );
};

export default App;
