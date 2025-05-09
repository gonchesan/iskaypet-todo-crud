import React from 'react';

import './styles.css';

const Skeleton: React.FC = () => {
  return (
    <article className='card'>
      <div className='card__body'>
        <div className={'skeleton skeleton-text skeleton-text__title'}></div>
        <div className={'skeleton skeleton-text'} />
      </div>
      <div className={'skeleton skeleton-button'} />
    </article>
  );
};

export default Skeleton;
