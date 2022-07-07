import React from 'react';
import { useTranslation } from 'react-i18next';
import './ProductInformation.scss';
import step1 from '../../assets/img/steps/step1.PNG';
export const ProductInformation = () => {
  const { t } = useTranslation(['global']);
  return (
    <section className='steps-container'>
      <p className='password-manager'>{t('steps.step1.header')}</p>
      <figure>
        <img alt='step1' src={step1} />
        <figcaption>{t('steps.step1.left')}</figcaption>
      </figure>
      <article>
        <p>{t('steps.step1.how.works.title')}</p>
        <text>{t('steps.step1.how.works.descrip')}</text>
      </article>
      <article>
        <p>{t('steps.step1.what.title')}</p>
        <text>{t('steps.step1.what.descrip')}</text>
      </article>
      <div id='buttons-container'>
        <button>{t('app.buttons.cancel')}</button>
        <button>{t('app.buttons.next')}</button>
      </div>
    </section>
  );
};
