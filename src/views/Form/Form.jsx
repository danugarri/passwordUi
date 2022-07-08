import React from 'react';
import { useTranslation } from 'react-i18next';
import './Form.scss';
import { Buttons } from '../../components/buttons/Buttons';
import { lengthCounterAction } from '../../app/actions/lengthCounterAction';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { ErrorHandler } from '../../components/errorHandler/ErrorHandler';
import { passwordValueAction } from '../../app/actions/passwordValueAction';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import { getFormSubmission } from '../../app/reducers/mock/getFormSubmissionSlice';

export const Form = () => {
  const { t } = useTranslation(['step2']);
  const dispatch = useDispatch();
  // Redux store
  const hintLength = useSelector((state) => state.lengthCounterReducer.hintLength);
  const passwordLength = useSelector((state) => state.lengthCounterReducer.passwordLength);
  const secondPasswordLength = useSelector(
    (state) => state.lengthCounterReducer.secondPasswordLength
  );
  const passwordValue = useSelector((state) => state.passwordValueReducer.password);
  const secondPasswordValue = useSelector((state) => state.passwordValueReducer.secondPassword);
  // Events handler and dispatchers
  const handleInputs = (e, valueType, lengthType) => {
    const typedText = e.target.value;
    const typedTextLength = e.target.value.length;
    // if passed valueType
    valueType && dispatch(passwordValueAction(typedText, valueType));
    dispatch(lengthCounterAction(typedTextLength, lengthType));
  };

  return (
    <section className='content-container'>
      <p className='password-manager'>{t('step2.headers.main')}</p>
      <label>{t('step2.descriptions.descr1')}</label>
      {/*  Passwprd inputs section */}
      <form id='inputs-container' onSubmit={(e) => dispatch(getFormSubmission(e, passwordValue))}>
        <div className='block'>
          <label className='header' htmlFor='pass'>
            {t('step2.headers.password.left')}
          </label>
          <input
            name='pass'
            minLength='8'
            maxLength='24'
            type='password'
            onChange={(e) => handleInputs(e, 'passwordValue', 'passwordLength')}
            placeholder={t('step2.placeholder.1')}
          />
        </div>
        <div className='block'>
          <label className='header' htmlFor='repass'>
            {t('step2.headers.password.right')}
          </label>
          {/* input */}
          <input
            name='repass'
            minLength='8'
            maxLength='24'
            type='password'
            onChange={(e) => handleInputs(e, 'secondPasswordValue', 'secondPasswordLength')}
            placeholder={t('step2.placeholder.2')}
          />
        </div>
        {/* error handler */}
        <ErrorHandler
          passwordLength={passwordLength}
          secondPasswordLength={secondPasswordLength}
          passwordValue={passwordValue}
          secondPasswordValue={secondPasswordValue}
        />
        {/* Hint input section*/}
        <div>
          <label>{t('step2.descriptions.descr2')}</label>
          <div className='block'>
            <div className='hint-info-container'>
              <label className='header' htmlFor='hint'>
                {t('step2.headers.hint')}
              </label>
              <InfoOutlinedIcon color='primary' className='info-icon' />
            </div>
            <input
              name='hint'
              className='hint-input'
              type='text'
              maxLength='255'
              onChange={(e) => handleInputs(e, null, 'hintLength')}
              placeholder={t('step2.placeholder.3')}
            />
          </div>
          <label className='length-counter'>{hintLength}/255</label>
        </div>
        <Buttons
          step1={false}
          step2={false}
          step3={true}
          submit={true}
          submitFunction={(e) => dispatch(getFormSubmission(e, passwordValue))}
        />
      </form>
    </section>
  );
};
