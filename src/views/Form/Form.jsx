import React from 'react';
import { useTranslation } from 'react-i18next';
import './Form.scss';
import { Buttons } from '../../components/buttons/Buttons';
import { lengthCounterAction } from '../../app/actions/lengthCounterAction';
import { lengthPasswordAction } from '../../app/actions/lengthCounterAction';
import { lengthSecondPasswordAction } from '../../app/actions/lengthCounterAction';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { ErrorHandler } from '../../components/errorHandler/ErrorHandler';
import { passwordValueAction } from '../../app/actions/passwordValueAction';

export const Form = () => {
  const { t } = useTranslation(['step2']);
  const dispatch = useDispatch();
  const hintLength = useSelector((state) => state.lengthCounterReducer.hintLength);
  const passwordLength = useSelector((state) => state.lengthCounterReducer.passwordLength);
  const secondPasswordLength = useSelector(
    (state) => state.lengthCounterReducer.secondPasswordLength
  );
  // Events handlers and dispatchers
  const handleHintLength = (e) => {
    const typedText = e.target.value;
    const typedTextLength = e.target.value.length;
    dispatch(lengthCounterAction(typedTextLength, 'hintLength'));
  };
  const handlePassword = (e) => {
    const typedText = e.target.value;
    const typedTextLength = e.target.value.length;
    dispatch(passwordValueAction(typedText, 'passwordValue'));
    dispatch(lengthPasswordAction(typedTextLength, 'passwordLength'));
  };
  const handleSecondPassword = (e) => {
    const typedText = e.target.value;
    const typedTextLength = e.target.value.length;
    dispatch(passwordValueAction(typedText, 'secondPasswordValue'));
    dispatch(lengthSecondPasswordAction(typedTextLength, 'secondPasswordLength'));
  };

  return (
    <section className='steps-container'>
      <p className='password-manager'>{t('step2.headers.main')}</p>
      <p>{t('step2.descriptions.descr1')}</p>
      {/*  Passwprd inputs section */}
      <section id='inputs-container'>
        <div className='block'>
          <p className='header'>{t('step2.headers.password.left')}</p>
          <input
            minLength='8'
            maxLength='24'
            type='password'
            onChange={handlePassword}
            placeholder={t('step2.placeholder.1')}
          />
        </div>
        <div className='block'>
          <p className='header'>{t('step2.headers.password.right')}</p>
          {/* input */}
          <input
            minLength='8'
            maxLength='24'
            type='password'
            // value={seconPasswordLength}
            onChange={handleSecondPassword}
            placeholder={t('step2.placeholder.2')}
          />
        </div>
      </section>
      {/* error handler */}
      <ErrorHandler passwordLength={passwordLength} secondPasswordLength={secondPasswordLength} />
      {/* Hint input section*/}
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
