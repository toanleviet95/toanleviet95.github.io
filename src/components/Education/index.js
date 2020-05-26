import React from 'react';
import Icon from 'components/Icon';
import education from 'assets/icons/education.svg';
import badge from 'assets/icons/badge.svg';
import hcmus from 'assets/hcmus.png';
import { StyledBreak } from './styled';

// eslint-disable-next-line react/prop-types
const Education = () => (
  <>
    <h2>-- Education --</h2>
    <div className='flex flex-wrap items-center justify-center mb-4'>
      <div>
        <img src={hcmus} alt='university' title='university' />
      </div>
      <StyledBreak />
      <div>
        University Of Science
      </div>
    </div>
    <div className='bg-gray-100 p-4 text-sm border border-gray-400 rounded'>
      <div>
        <Icon src={education} alt='education' width='1em' />
        <span>Computer Science</span>
      </div>
      <div>
        <Icon src={badge} alt='badge' width='1em' />
        <span>
          GPA: 7.7 / 10
        </span>
      </div>
    </div>
  </>
  );

export default Education;
