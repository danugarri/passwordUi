import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './ErrorHandler.scss';
import { regularExpression, regexUpperCase, regexNumber } from '../../app/hooks/useCheck';

export const ErrorHandler = ({
  passwordLength,
  secondPasswordLength,
  secondPasswordValue,
  passwordValue,
}) => {
  const { t } = useTranslation(['step2']);
  return (
    <section className='error-container'>
      {/* When to display the error message */}
      {/* Password does not match */}
      {passwordLength !== secondPasswordLength || secondPasswordValue !== passwordValue ? (
        <p className='alert'>{t('step2.errorHandler.length')}</p>
      ) : null}
      {/* Password does not pass the length requirements*/}
      {!regularExpression.test(passwordValue) ? (
        <p className='alert'>{t('step2.errorHandler.lengthRequested')}</p>
      ) : null}
      {/* Password does not pass the pattern requirements at least 1 an upper case letter*/}
      {!regexUpperCase.test(passwordValue) ? (
        <p className='alert'>{t('step2.errorHandler.pattern.upperCase')}</p>
      ) : null}
      {/* Password does not pass the pattern requirements at least 1 a NUMBER*/}
      {!regexNumber.test(passwordValue) ? (
        <p className='alert'>{t('step2.errorHandler.pattern.number')}</p>
      ) : null}
    </section>
  );
};
// typing props
ErrorHandler.propTypes = {
  passwordLength: PropTypes.number,
  secondPasswordLength: PropTypes.number,
  secondPasswordValue: PropTypes.string,
  passwordValue: PropTypes.string,
};
