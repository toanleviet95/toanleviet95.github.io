import React from 'react';
import tiki from 'assets/tiki.png';
import vng from 'assets/vng.png';
import younet from 'assets/younet.png';

// eslint-disable-next-line react/prop-types
const Working = () => (
  <>
    <h2>-- Working --</h2>
    <div className='flex items-center'>
      <div className='w-1/6 p-2 text-center'>
        <img src={tiki} alt='TIKI CORPORATION' />
      </div>
      <div className='w-5/6 p-2'>
        <div>TIKI CORPORATION - (05/2018 - 06/2020)</div>
        <div className='text-sm'>Software Engineer</div>
        <div className='bg-gray-100 p-1 text-sm border border-gray-400 rounded'>
          <div>
            Develop 
            {' '}
            <a href='https://socialheat.younetmedia.com' target='_blank' rel='noreferrer'>Social Heat</a>
            {' '}
            - Social listening 
          </div>
          <div>
            Team size: 6
          </div>
          <div>
            Tech: Angular + NodeJS
          </div>
        </div>
      </div>
    </div>
    <div className='flex items-center'>
      <div className='w-1/6 p-2 text-center'>
        <img src={younet} alt='YOUNET' />
      </div>
      <div className='w-5/6 p-2'>
        <div>YOUNET - (04/2017 - 05/2018)</div>
        <div className='text-sm'>Fullstack Engineer</div>
        <div className='bg-gray-100 p-1 text-sm border border-gray-400 rounded'>
          <div>
            Develop 
            {' '}
            <a href='https://socialheat.younetmedia.com' target='_blank' rel='noreferrer'>Social Heat</a>
            {' '}
            - Social listening 
          </div>
          <div>
            Team size: 6
          </div>
          <div>
            Tech: Angular + NodeJS
          </div>
        </div>
      </div>
    </div>
    <div className='flex items-center'>
      <div className='w-1/6 p-2 text-center'>
        <img src={vng} alt='VNG Corporation' />
      </div>
      <div className='w-5/6 p-2'>
        <div>VNG CORPORATION - (06/2016 - 09/2016)</div>
        <div className='text-sm'>Fresher</div>
        <div className='bg-gray-100 p-1 text-sm border border-gray-400 rounded'>
          <div>
            Develop internal CMS website for network department
          </div>
          <div>
            Team size: 5
          </div>
          <div>
            Tech: PHP with Phalcon Framework + JS
          </div>
        </div>
      </div>
    </div>
  </>
  );

export default Working;
