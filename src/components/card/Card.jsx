import React from 'react';
import './Card.scss';

export const Card = ({ children }) => {
  return (
    <section id='card'>
      <div id='banner'>
        <div className='detail'>1</div>
        <div className='linking-bar'></div>
        <div className='detail'>2</div>
        <div className='linking-bar'></div>
        <div className='detail'>3</div>
      </div>
      {children}
    </section>
  );
};
