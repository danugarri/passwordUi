import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import { useSelector } from 'react-redux/es/exports';

export const useBannerStyles = () => {
  const step1 = useSelector((state) => state.stepsReducer.steps.step1);
  const step2 = useSelector((state) => state.stepsReducer.steps.step2);
  const step3 = useSelector((state) => state.stepsReducer.steps.step3);
  // Handling banner details style
  const detailStyle1 = step2 || step3 ? 'passed' : '';
  const detailStyle2 = step3 ? 'passed' : '';
  const activeStep1 = step1 ? 'active' : '';
  const activeStep2 = step2 ? 'active' : '';
  const activeStep3 = step3 ? 'active' : '';

  // Handling user steps
  const checkStyle1 = step2 || step3 ? <CheckIcon className='check-icon' /> : 1;
  const checkStyle2 = step3 ? <CheckIcon className='check-icon' /> : 2;

  //   Object styles
  const bannerStyles = {
    detailStyle1,
    detailStyle2,
    activeStep1,
    activeStep2,
    activeStep3,
    checkStyle1,
    checkStyle2,
  };
  //   State steps
  const stepsState = {
    step1,
    step2,
    step3,
  };
  return { bannerStyles, stepsState };
};
