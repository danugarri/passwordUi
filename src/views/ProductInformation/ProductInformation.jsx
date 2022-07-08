import React from 'react';
import { useTranslation } from 'react-i18next';
import './ProductInformation.scss';
import step1Img from '../../assets/img/steps/step1.PNG';
import { Buttons } from '../../components/buttons/Buttons';

export const ProductInformation = () => {
  const { t } = useTranslation(['global']);

  return (
    <section className='content-container'>
      <p className='password-manager'>{t('steps.step1.header')}</p>
      <figure>
        <img alt='step1' src={step1Img} className='step1-img' />
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
      <Buttons step1={false} step2={true} step3={false} />
    </section>
  );
};
