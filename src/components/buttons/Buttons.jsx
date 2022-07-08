import React from 'react';
import { selectStepAction } from '../../app/actions/selectStepAction';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

export const Buttons = ({ step1, step2, step3, submit, final, submitFunction }) => {
  const { t } = useTranslation(['global']);
  const dispatch = useDispatch();

  return (
    <>
      {/* step1 */}
      {!final && !submit && (
        <div className='buttons-container-step1'>
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
      )}
      {/* step2 */}
      {submit && (
        <div className='buttons-container'>
          <button
            type='button'
            className='cancel-button'
            onClick={() => dispatch(selectStepAction(true, false, false))}
          >
            {t('app.buttons.cancel')}
          </button>
          <button
            className='next-button submit'
            type='submit'
            onClick={(e) => {
              submitFunction(e);
              dispatch(selectStepAction(false, false, true));
            }}
          >
            {t('app.buttons.submit')}
          </button>
        </div>
      )}
      {/* step3 */}
      {final && !submit && (
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
//  Typing props
Buttons.propTypes = {
  step1: PropTypes.bool,
  step2: PropTypes.bool,
  step3: PropTypes.bool,
  final: PropTypes.bool,
  submit: PropTypes.bool,
  submitFunction: PropTypes.func,
};
