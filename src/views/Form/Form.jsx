import React from 'react';
import { useTranslation } from 'react-i18next';
import './Form.scss';
import { Buttons } from '../../components/buttons/Buttons';
import { lengthCounterAction } from '../../app/actions/lengthCounterAction';
import { lengthPasswordAction } from '../../app/actions/lengthCounterAction';
import { lengthSecondPasswordAction } from '../../app/actions/lengthCounterAction';
import { useDispatch, useSelector } from 'react-redux/es/exports';

export const Form = () => {
  const { t } = useTranslation(['step2']);
  const dispatch = useDispatch();
  const hintLength = useSelector((state) => state.lengthCounterReducer.hintLength);
  const passwordLength = useSelector((state) => state.lengthCounterReducer.passwordLength);
  const seconPasswordLength = useSelector(
    (state) => state.lengthCounterReducer.secondPasswordLength
  );
  const handleHintLength = (e) => {
    const typedText = e.target.value.length;
    dispatch(lengthCounterAction(typedText, 'hintLength'));
  };
  const handlePasswordLength = (e) => {
    const typedText = e.target.value.length;
    dispatch(lengthPasswordAction(typedText, 'passwordLength'));
  };
  const handleSecondPasswordLength = (e) => {
    const typedText = e.target.value.length;
    dispatch(lengthSecondPasswordAction(typedText, 'secondPasswordLength'));
  };
  return (
    <section className='steps-container'>
      <p className='password-manager'>{t('step2.headers.main')}</p>
      <p>{t('step2.descriptions.descr1')}</p>
      <section id='inputs-container'>
        <div className='block'>
          <p className='header'>{t('step2.headers.password.left')}</p>
          <input
            minLength='8'
            maxLength='24'
            type='password'
            // value={passwordLength}
            onChange={handlePasswordLength}
            placeholder={t('step2.placeholder.1')}
          />
        </div>
        <div className='block'>
          <p className='header'>{t('step2.headers.password.right')}</p>
          <input
            minLength='8'
            maxLength='24'
            type='password'
            // value={seconPasswordLength}
            onChange={handleSecondPasswordLength}
            placeholder={t('step2.placeholder.2')}
          />
        </div>
      </section>
      <section>
        <p>{t('step2.descriptions.descr2')}</p>
        <p className='header'>{t('step2.headers.hint')}</p>
        <input
          id='hint-input'
          type='text'
          maxLength='255'
          onChange={handleHintLength}
          placeholder={t('step2.placeholder.3')}
        />
        <p className='length-counter'>{hintLength}/255</p>
      </section>
      <Buttons step1={false} step2={false} step3={true} />
    </section>
  );
};
