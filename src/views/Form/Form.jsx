import React from 'react';
import { useTranslation } from 'react-i18next';
import './Form.scss';

import { Buttons } from '../../components/buttons/Buttons';

export const Form = () => {
  const { t } = useTranslation(['step2']);

  return (
    <section className='steps-container'>
      <p className='password-manager'>{t('step2.headers.main')}</p>
      <p>{t('step2.descriptions.descr1')}</p>
      <section id='inputs-container'>
        <div className='block'>
          <p className='header'>{t('step2.headers.password.left')}</p>
          <input type='password' onChange={''} placeholder={t('step2.placeholder.1')} />
        </div>
        <div className='block'>
          <p className='header'>{t('step2.headers.password.right')}</p>
          <input type='password' onChange={''} placeholder={t('step2.placeholder.2')} />
        </div>
      </section>
      <section>
        <p>{t('step2.descriptions.descr2')}</p>
        <p className='header'>{t('step2.headers.hint')}</p>
        <input type='text' onChange={''} placeholder={t('step2.placeholder.3')} />
      </section>
      <Buttons step1={false} step2={false} step3={true} />
    </section>
  );
};
