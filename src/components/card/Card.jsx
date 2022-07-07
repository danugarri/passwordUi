import React from 'react';
import { Banner } from './banner/Banner';
import './Card.scss';

export const Card = ({ children }) => {
  return (
    <section className='card'>
      <Banner />
      {children}
    </section>
  );
};
