import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

export const PasswordSection = ({ handleInputs }) => {
  const { t } = useTranslation(['step2']);

  return (
    <section className='password-section'>
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
    </section>
  );
};
//  Typing props
PasswordSection.propTypes = {
  handleInputs: PropTypes.func,
};
