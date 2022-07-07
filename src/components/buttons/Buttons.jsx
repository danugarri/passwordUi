import React from 'react';
import { selectStepAction } from '../../app/actions/selectStepAction';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

export const Buttons = ({ step1, step2, step3 }) => {
  const { t } = useTranslation(['global']);
  const dispatch = useDispatch();

  return (
    <div className='buttons-container'>
      <button className='cancel-button'>{t('app.buttons.cancel')}</button>
      <button
        className='next-button'
        onClick={() => dispatch(selectStepAction(step1, step2, step3))}
      >
        {t('app.buttons.next')}
      </button>
    </div>
  );
};

Buttons.propTypes = {
  step1: PropTypes.bool,
  step2: PropTypes.bool,
  step3: PropTypes.bool,
};
