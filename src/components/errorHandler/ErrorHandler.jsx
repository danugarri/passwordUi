import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './ErrorHandler.scss';
import { regularExpression } from '../../app/hooks/useCheck';

export const ErrorHandler = ({
  passwordLength,
  secondPasswordLength,
  secondPasswordValue,
  passwordValue,
}) => {
  const { t } = useTranslation(['step2']);
  return (
    <section>
      {/* When to display the error message */}
      {/* Password does not match */}
      {passwordLength !== secondPasswordLength || secondPasswordValue !== passwordValue ? (
        <p className='alert'>{t('step2.errorHandler.length')}</p>
      ) : null}
      {/* Password does not pass the length requirements*/}
      {!regularExpression.test(passwordValue) ? (
        <p className='alert'>{t('step2.errorHandler.lengthRequested')}</p>
      ) : null}
      {/* Password does not pass the pattern requirements at least 1 number and an upper case letter*/}
      {!regularExpression.test(passwordValue) ? (
        <p className='alert'>{t('step2.errorHandler.pattern')}</p>
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
