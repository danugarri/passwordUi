import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import './ErrorHandler.scss';

export const ErrorHandler = ({ passwordLength, secondPasswordLength }) => {
  const { t } = useTranslation(['step2']);
  return (
    <section>
      <p id='alert'>
        {passwordLength !== secondPasswordLength ? t('step2.errorHandler.length') : null}
      </p>
    </section>
  );
};

ErrorHandler.propTypes = {
  passwordLength: PropTypes.number,
  secondPasswordLength: PropTypes.number,
};
