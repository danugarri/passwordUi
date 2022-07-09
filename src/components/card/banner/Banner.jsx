import React from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { selectStepAction } from '../../../app/actions/selectStepAction';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import './Banner.scss';

export const Banner = () => {
  const dispatch = useDispatch();
  const step1 = useSelector((state) => state.stepsReducer.steps.step1);
  const step2 = useSelector((state) => state.stepsReducer.steps.step2);
  const step3 = useSelector((state) => state.stepsReducer.steps.step3);
  const detailStyle1 = step2 ? 'passed' : 'detail';
  const detailStyle2 = step3 ? 'passed' : 'detail';

  return (
    <section id='banner'>
      <section className='steps-container'>
        {/* step1 */}
        <div className='detail-container'>
          <div className='block-container'>
            <div
              className={detailStyle1}
              onClick={() => {
                dispatch(selectStepAction(true, false, false));
              }}
            >
              1
            </div>
            <div className='linking-bar1'></div>
          </div>
          {step1 && <ArrowDropUpIcon className='arrow-icon1' />}
        </div>
        {/* step2 */}
        <div className='detail-container'>
          <div className='block-container'>
            <div
              className={detailStyle2}
              onClick={() => {
                dispatch(selectStepAction(false, true, false));
              }}
            >
              2
            </div>
            <div className='linking-bar1'></div>
          </div>
          {step2 && <ArrowDropUpIcon className='arrow-icon2' />}
        </div>
        {/* step3 */}
        <div className='detail-container'>
          <div className='block-container'>
            <div
              className='detail3'
              // onClick={() => {
              //   dispatch(selectStepAction(false, false, true));
              // }}
            >
              3
            </div>
          </div>
          {step3 && <ArrowDropUpIcon className='arrow-icon3' />}
        </div>
      </section>
    </section>
  );
};
