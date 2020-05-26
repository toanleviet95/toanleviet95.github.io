import React from 'react';
import Icon from 'components/Icon';
import headphones from 'assets/icons/headphones.svg';
import computerLaptop from 'assets/icons/computer-laptop.svg';
import calendar from 'assets/icons/calendar.svg';
import travelWalk from 'assets/icons/travel-walk.svg';


// eslint-disable-next-line react/prop-types
const Interest = () => (
  <>
    <h2>-- Interest --</h2>
    <div className='bg-gray-100 p-4 text-sm border border-gray-400 rounded'>
      <div>
        <Icon src={computerLaptop} alt='computerLaptop' width='1em' />
        <span>Competitive coding</span>
      </div>
      <div>
        <Icon src={calendar} alt='calendar' width='1em' />
        <span>Join Grokking events</span>
      </div>
      <div>
        <Icon src={headphones} alt='headphones' width='1em' />
        <span>Sing & Music</span>
      </div>
      <div>
        <Icon src={travelWalk} alt='travelWalk' width='1em' />
        <span>Marathon</span>
      </div>
    </div>
  </>
  );

export default Interest;
