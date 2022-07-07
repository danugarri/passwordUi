import React from 'react';
import { useTranslation } from 'react-i18next';
import './Form.scss';
import { Buttons } from '../../components/buttons/Buttons';
import { lengthCounterAction } from '../../app/actions/lengthCounterAction';
import { useDispatch, useSelector } from 'react-redux/es/exports';

export const Form = () => {
  const { t } = useTranslation(['step2']);
  const dispatch = useDispatch();
  const length = useSelector((state) => state.lengthCounterReducer.length);

  const handleHintLength = (e) => {
    const typedText = e.target.value.length;
    dispatch(lengthCounterAction(typedText));
  };
  return (
    <section className='steps-container'>
      <p className='password-manager'>{t('step2.headers.main')}</p>
      <p>{t('step2.descriptions.descr1')}</p>
      <section id='inputs-container'>
        <div className='block'>
          <p className='header'>{t('step2.headers.password.left')}</p>
          <input type='password' onChange={() => ''} placeholder={t('step2.placeholder.1')} />
        </div>
        <div className='block'>
          <p className='header'>{t('step2.headers.password.right')}</p>
          <input type='password' onChange={() => ''} placeholder={t('step2.placeholder.2')} />
        </div>
      </section>
      <section>
        <p>{t('step2.descriptions.descr2')}</p>
        <p className='header'>{t('step2.headers.hint')}</p>
        <input
          id='hint-input'
          type='text'
          maxLength='60'
          onChange={handleHintLength}
          placeholder={t('step2.placeholder.3')}
        />
        <p className='length-counter'>{length}/60</p>
      </section>
      <Buttons step1={false} step2={false} step3={true} />
    </section>
  );
};
