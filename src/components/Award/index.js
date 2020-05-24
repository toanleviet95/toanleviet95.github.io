import React from 'react';
import Icon from 'components/Icon';
import badge from 'assets/icons/badge.svg';

// eslint-disable-next-line react/prop-types
const Award = () => (
  <>
    <h2>-- Award --</h2>
    <div className='bg-gray-100 p-4 text-sm border border-gray-400 rounded'>
      <div>
        <Icon src={badge} alt='badge' width='1em' />
        <span>TIKI First-Prize Winner For Outstading in 2019</span>
      </div>
      <div>
        <Icon src={badge} alt='calendar' width='1em' />
        <span>Binh Duong City Hackathon in 2017</span>
      </div>
    </div>
  </>
  );

export default Award;
