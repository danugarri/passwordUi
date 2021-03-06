import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './ErrorHandler.scss';
import { regularExpression, regexUpperCase, regexNumber } from '../../app/hooks/useCheck/useCheck';

export const ErrorHandler = ({
  passwordLength,
  secondPasswordLength,
  secondPasswordValue,
  passwordValue,
}) => {
  const { t } = useTranslation(['step2']);
  const typedInput = passwordLength !== 0 && secondPasswordLength !== 0;
  return (
    <section className='error-container'>
      {/* When to display the error message */}
      {/* Password does not match */}
      {passwordLength !== secondPasswordLength || secondPasswordValue !== passwordValue ? (
        <p className='alert'>{t('step2.errorHandler.length')}</p>
      ) : null}
      {/* Password does not pass the length requirements*/}
      {typedInput && !regularExpression.test(passwordValue) ? (
        <p className='alert'>{t('step2.errorHandler.lengthRequested')}</p>
      ) : null}
      {/* Password does not pass the pattern requirements at least 1 an upper case letter*/}
      {typedInput && !regexUpperCase.test(passwordValue) ? (
        <p className='alert'>{t('step2.errorHandler.pattern.upperCase')}</p>
      ) : null}
      {/* Password does not pass the pattern requirements at least 1 a NUMBER*/}
      {typedInput && !regexNumber.test(passwordValue) ? (
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
