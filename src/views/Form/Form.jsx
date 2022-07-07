import React from 'react';
import { useTranslation } from 'react-i18next';
import './Form.scss';

import { Buttons } from '../../components/buttons/Buttons';

export const Form = () => {
  const { t } = useTranslation(['step2']);

  return (
    <section className='steps-container'>
      <p className='password-manager'>{t('step2.headers.main')}</p>

      <article>
        <p className='header'>{t('step2.headers.password.left')}</p>
        <p className='header'>{t('step2.headers.password.right')}</p>
      </article>
      <article>
        <p className='header'>{t('steps.step1.what.title')}</p>
        <p>{t('steps.step1.what.descrip')}</p>
      </article>
      <Buttons step1={false} step2={false} step3={true} />
    </section>
  );
};
