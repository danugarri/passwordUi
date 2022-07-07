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
        <p className='header'>{t('steps.step1.how.works.title')}</p>
        <p>{t('steps.step1.how.works.descrip')}</p>
      </article>
      <article>
        <p className='header'>{t('steps.step1.what.title')}</p>
        <p>{t('steps.step1.what.descrip')}</p>
      </article>
      <div className='buttons-container'>
        <button>{t('app.buttons.cancel')}</button>
        <button>{t('app.buttons.next')}</button>
      </div>
    </section>
  );
};
