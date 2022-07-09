import React from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import { selectStepAction } from '../../../app/actions/selectStepAction';
import { useDispatch } from 'react-redux/es/exports';
import './Banner.scss';
import { useBannerStyles } from '../../../app/hooks/useBannerStyles';

export const Banner = () => {
  const dispatch = useDispatch();
  const { bannerStyles, stepsState } = useBannerStyles();
  const {
    detailStyle1,
    detailStyle2,
    activeStep1,
    activeStep2,
    activeStep3,
    checkStyle1,
    checkStyle2,
  } = bannerStyles;
  const { step1, step2, step3 } = stepsState;

  return (
    <section id='banner'>
      <section className='steps-container'>
        {/* step1 */}
        <div className='detail-container'>
          <div className='block-container'>
            <div
              className={`detail ${detailStyle1} ${activeStep1}`}
              onClick={() => {
                dispatch(selectStepAction(true, false, false));
              }}
            >
              {checkStyle1}
            </div>
            <div className={`linking-bar1 ${detailStyle1}`}></div>
          </div>
          {step1 && <ArrowDropUpIcon className='arrow-icon1' />}
        </div>
        {/* step2 */}
        <div className='detail-container'>
          <div className='block-container'>
            <div
              className={`detail ${detailStyle2} ${activeStep2}`}
              onClick={() => {
                dispatch(selectStepAction(false, true, false));
              }}
            >
              {checkStyle2}
            </div>
            <div className={`linking-bar1 ${detailStyle2}`}></div>
          </div>
          {step2 && <ArrowDropUpIcon className='arrow-icon2' />}
        </div>
        {/* step3 */}
        <div className='detail-container'>
          <div className='block-container'>
            <div className={`detail3 ${activeStep3}`}>3</div>
          </div>
          {step3 && <ArrowDropUpIcon className='arrow-icon3' />}
        </div>
      </section>
    </section>
  );
};
