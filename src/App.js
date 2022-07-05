import React, { Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import OpenbankLogo from './assets/img/key_openbank.png';
import Step1 from './views/ProductInformation';
import Step2 from './views/Form';
import Step3 from './views/Feedback';
import supportedLanguages from './locales/supported';
import './App.scss';

const SelectLanguage = () => {
  const { t, i18n } = useTranslation('global');
  const changeLanguage = ({ target }) => {
    i18n.changeLanguage(target.value);
    console.log(target.value);
  };
  return (
    <React.Fragment>
      <p>{t('app.title')}</p>
      <label htmlFor='languageSelected'>Idioma</label>
      <select name='languageSelected' onChange={changeLanguage} value={i18n.language}>
        {Object.keys(supportedLanguages).map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </React.Fragment>
  );
};

const App = () => {
  return (
    <div className='App'>
      <main className='App-content'>
        <Suspense fallback='Loading translations'>
          <SelectLanguage />
        </Suspense>
      </main>
    </div>
  );
};

export default App;
