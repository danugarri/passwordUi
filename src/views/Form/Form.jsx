import React from 'react';
import { useTranslation } from 'react-i18next';
import './Form.scss';
import { Buttons } from '../../components/buttons/Buttons';
import { lengthCounterAction } from '../../app/actions/lengthCounterAction';
import { useDispatch, useSelector } from 'react-redux';
import { ErrorHandler } from '../../components/errorHandler/ErrorHandler';
import { passwordValueAction } from '../../app/actions/passwordValueAction';
import { getFormSubmission } from '../../app/reducers/mock/getFormSubmissionSlice';
import { useCheck } from '../../app/hooks/useCheck/useCheck';
import { HintSection } from './hintSection/HintSection';
import { PasswordSection } from './passwordSection/PasswordSection';

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
  // Disabled button state
  const [disabled] = useCheck(passwordValue, secondPasswordValue);
  // next BUTTON COLOR
  const nextButtonStyle = disabled ? 'disabled-button' : 'next-button';
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
      <form id='inputs-container' onSubmit={(e) => dispatch(getFormSubmission(e, passwordValue))}>
        {/*  Passwprd inputs section */}
        <PasswordSection handleInputs={handleInputs} />
        {/* error handler */}
        <ErrorHandler
          passwordLength={passwordLength}
          secondPasswordLength={secondPasswordLength}
          passwordValue={passwordValue}
          secondPasswordValue={secondPasswordValue}
        />
        {/* Hint input section*/}
        <HintSection handleInputs={handleInputs} hintLength={hintLength} />
        <Buttons
          step1={false}
          step2={false}
          step3={true}
          submit={true}
          submitFunction={(e) => dispatch(getFormSubmission(passwordValue))}
          disabled={disabled}
          nextButtonStyle={nextButtonStyle}
        />
      </form>
    </section>
  );
};
