import React from 'react';
import Icon from 'components/Icon';
import education from 'assets/icons/education.svg';
import badge from 'assets/icons/badge.svg';


// eslint-disable-next-line react/prop-types
const Education = () => (
  <>
    <h2>-- Education --</h2>
    <div className='flex items-center mb-4'>
      <div className='w-1/4'>
        <img src='https://media-exp1.licdn.com/dms/image/C510BAQHAWJxua92uJQ/company-logo_200_200/0?e=2159024400&v=beta&t=b2zxhY8tJDZaHgW6M8L1yqlcJdjwvMDsSJm3lz5QRdY' alt='university' title='university' />
      </div>
      <div className='w-3/4'>
        <div>
          University Of Science
        </div>
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
