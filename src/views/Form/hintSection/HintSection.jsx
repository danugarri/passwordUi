import React from 'react';
import { useTranslation } from 'react-i18next';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PropTypes from 'prop-types';

export const HintSection = ({ handleInputs, hintLength }) => {
  const { t } = useTranslation(['step2']);

  return (
    <section className='hint-section'>
      <label style={{ top: '1rem', position: 'relative' }}>{t('step2.descriptions.descr2')}</label>
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
      <p className='length-counter'>{hintLength}/255</p>
    </section>
  );
};
//  Typing props
HintSection.propTypes = {
  handleInputs: PropTypes.func,
  hintLength: PropTypes.number,
};
