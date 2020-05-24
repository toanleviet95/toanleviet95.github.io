import React from 'react';

// eslint-disable-next-line react/prop-types
const Working = () => (
  <>
    <h2>-- Working --</h2>
    <div className='flex items-center'>
      <div className='w-1/6 p-2 text-center'>
        <img src='https://brasol.vn/public/uploads/1571133630-logo-tiki.png' alt='TIKI Corporation' />
      </div>
      <div className='w-5/6 p-2'>TIKI Corporation</div>
    </div>
    <div className='flex items-center'>
      <div className='w-1/6 p-2 text-center'>
        <img src='https://cdn.itviec.com/employers/younet/logo/social/KubBFm8ZSqd7V8BojanjeQDK/younet-logo.jpg' alt='Younet' />
      </div>
      <div className='w-5/6 p-2'>
        <div>Younet</div>
        <div className='text-sm'>Software Engineer - 04/2017 - 05/2018</div>
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
        <img src='https://iujobhub.com/wp-content/uploads/2019/08/0.png' alt='VNG Corporation' />
      </div>
      <div className='w-5/6 p-2'>
        <div>VNG Corporation</div>
        <div className='text-sm'>Fresher - 06/2016 - 09/2016</div>
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
