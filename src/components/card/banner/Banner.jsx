import React from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { selectStepAction } from '../../../app/actions/selectStepAction';
import { useDispatch, useSelector } from 'react-redux/es/exports';

export const Banner = () => {
  const dispatch = useDispatch();
  const hover1 = useSelector((state) => state.stepsReducer.steps.hover1);
  const hover2 = useSelector((state) => state.stepsReducer.steps.hover2);
  const hover3 = useSelector((state) => state.stepsReducer.steps.hover3);
  console.log(hover2);
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
        {hover1 && <ArrowDropUpIcon color='error' className='arrow-icon' />}
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
        {hover2 && <ArrowDropUpIcon color='error' className='arrow-icon' />}
      </div>
      <div className='linking-bar2'></div>
      <div className='detail-container'>
        <div
          className='detail'
          onClick={() => {
            dispatch(selectStepAction(false, false, true));
          }}
        >
          3
        </div>
        {hover3 && <ArrowDropUpIcon color='error' className='arrow-icon' />}
      </div>
    </section>
  );
};
