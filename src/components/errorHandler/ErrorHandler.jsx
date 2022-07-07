import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './ErrorHandler.scss';

export const ErrorHandler = ({
  passwordLength,
  secondPasswordLength,
  secondPasswordValue,
  passwordValue,
}) => {
  const { t } = useTranslation(['step2']);
  return (
    <section>
      <p id='alert'>
        {/* When to display the error message */}
        {passwordLength !== secondPasswordLength || secondPasswordValue !== passwordValue
          ? t('step2.errorHandler.length')
          : null}
      </p>
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
