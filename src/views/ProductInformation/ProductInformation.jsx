import React from 'react';
import { useTranslation } from 'react-i18next';
import './ProductInformation.scss';
import step1 from '../../assets/img/steps/step1.PNG';
export const ProductInformation = () => {
  const { t } = useTranslation(['global']);
  return (
    <section className='steps-container'>
      <p className='password-manager'>{t('steps.step1.header')}</p>
      <img alt='step1' src={step1} />
    </section>
  );
};
