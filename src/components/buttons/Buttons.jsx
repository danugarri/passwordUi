import React from 'react';
import { selectStepAction } from '../../app/actions/selectStepAction';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

export const Buttons = ({ step1, step2, step3, final }) => {
  const { t } = useTranslation(['global']);
  const dispatch = useDispatch();

  return (
    <>
      {!final ? (
        <div className='buttons-container'>
          <button
            className='cancel-button'
            onClick={() => dispatch(selectStepAction(true, false, false))}
          >
            {t('app.buttons.cancel')}
          </button>

          <button
            className='next-button'
            onClick={() => dispatch(selectStepAction(step1, step2, step3))}
          >
            {t('app.buttons.next')}
          </button>
        </div>
      ) : (
        <button
          className='next-button'
          onClick={() => dispatch(selectStepAction(true, false, false))}
        >
          {t('app.buttons.finish')}
        </button>
      )}
    </>
  );
};

Buttons.propTypes = {
  step1: PropTypes.bool,
  step2: PropTypes.bool,
  step3: PropTypes.bool,
  final: PropTypes.bool,
};
