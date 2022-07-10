import React from 'react';
import { supportedLanguages } from '../../config/i18n/i18n';
import { useTranslation } from 'react-i18next';
import './SelectLanguage.scss';

export const SelectLanguage = () => {
  const { t, i18n } = useTranslation(['global']);
  const changeCuurentLanguage = ({ target }) => {
    i18n.changeLanguage(target.value);
    console.log(target.value);
  };
  return (
    <section className='select-language'>
      <p id='greeting'>{t('app.greeting')}</p>
      <div id='language'>
        <label htmlFor='languageSelected' id='language-label'>
          {t('app.language.title')}:
        </label>
        <select name='languageSelected' onChange={changeCuurentLanguage} value={i18n.language}>
          {Object.keys(supportedLanguages).map((option, index) => (
            <option key={index} value={option}>
              {t(`app.language.${option}`)}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};
