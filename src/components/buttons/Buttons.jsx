import React from 'react';
import { selectStepAction } from '../../app/actions/selectStepAction';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { passwordValueAction } from '../../app/actions/passwordValueAction';
import { lengthCounterAction } from '../../app/actions/lengthCounterAction';

export const Buttons = (props) => {
  const { step1, step2, step3, submit, final, submitFunction, disabled, nextButtonStyle } = props;
  const { t } = useTranslation(['global']);
  const dispatch = useDispatch();
  const submitStatus = useSelector((state) => state.submitFormReducer.status);

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
            onClick={() => {
              dispatch(selectStepAction(true, false, false));
              // reset passwords Redux state
              dispatch(passwordValueAction('', 'passwordValue'));
              dispatch(lengthCounterAction(0, 'passwordLength'));
              dispatch(lengthCounterAction(0, 'secondPasswordLength'));
              dispatch(lengthCounterAction(0, 'hintLength'));
              dispatch(passwordValueAction('', 'secondPasswordValue'));
            }}
          >
            {t('app.buttons.cancel')}
          </button>
          <button
            className={nextButtonStyle}
            type='submit'
            disabled={disabled}
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
          className='finish-button'
          onClick={() => {
            dispatch(selectStepAction(true, false, false));
            // reset passwords and hint Redux state
            dispatch(passwordValueAction('', 'passwordValue'));
            dispatch(lengthCounterAction(0, 'passwordLength'));
            dispatch(lengthCounterAction(0, 'secondPasswordLength'));
            dispatch(lengthCounterAction(0, 'hintLength'));
            dispatch(passwordValueAction('', 'secondPasswordValue'));
          }}
        >
          {/* error  - success*/}
          {submitStatus === 401 ? t('app.buttons.finish.error') : t('app.buttons.finish.success')}
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
  disabled: PropTypes.bool,
  nextButtonStyle: PropTypes.string,
};
