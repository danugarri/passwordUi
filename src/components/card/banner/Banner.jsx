import React, { useState } from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

export const Banner = () => {
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);

  return (
    <section id='banner'>
      <div className='detail-container'>
        <div
          className='detail'
          onClick={() => {
            setHover1(true);
            setHover2(false);
            setHover3(false);
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
            setHover1(false);
            setHover2(true);
            setHover3(false);
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
            setHover1(false);
            setHover2(false);
            setHover3(true);
          }}
        >
          3
        </div>
        {hover3 && <ArrowDropUpIcon color='error' className='arrow-icon' />}
      </div>
    </section>
  );
};
