import React from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { selectStepAction } from '../../../app/actions/selectStepAction';
import { useDispatch, useSelector } from 'react-redux/es/exports';

export const Banner = () => {
  const dispatch = useDispatch();
  const step1 = useSelector((state) => state.stepsReducer.steps.step1);
  const step2 = useSelector((state) => state.stepsReducer.steps.step2);
  const step3 = useSelector((state) => state.stepsReducer.steps.step3);

  return (
    <section id='banner'>
      <div className='detail-container'>
        <div
          className='detail'
          onClick={() => {
            dispatch(selectStepAction(true, false, false));
          }}
        >
          1
        </div>
        {step1 && <ArrowDropUpIcon className='arrow-icon' />}
      </div>
      <div className='linking-bar1'></div>
      <div className='detail-container'>
        <div
          className='detail'
          onClick={() => {
            dispatch(selectStepAction(false, true, false));
          }}
        >
          2
        </div>
        {step2 && <ArrowDropUpIcon className='arrow-icon' />}
      </div>
      <div className='linking-bar2'></div>
      <div className='detail-container'>
        <div
          className='detail3'
          // onClick={() => {
          //   dispatch(selectStepAction(false, false, true));
          // }}
        >
          3
        </div>
        {step3 && <ArrowDropUpIcon className='arrow-icon' />}
      </div>
    </section>
  );
};
