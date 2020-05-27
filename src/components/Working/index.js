import React from 'react';
import tiki from 'assets/tiki.png';
import vng from 'assets/vng.png';
import younet from 'assets/younet.png';

// eslint-disable-next-line react/prop-types
const Working = () => (
  <>
    <h2>-- Work Experience --</h2>
    <div className='flex items-center'>
      <div className='w-1/6 p-2 text-center'>
        <img src={tiki} alt='TIKI CORPORATION' />
      </div>
      <div className='w-5/6 p-2'>
        <div>TIKI CORPORATION - (05/2018 - 06/2020)</div>
        <div className='text-tiny'>Software Engineer</div>
        <div className='bg-gray-100 p-1 text-tiny border border-gray-400 rounded'>
          <div>
            * Team size: 22
          </div>
          <div>
            * Develop 
            {' '}
            <a className='underline italic' href='https://sellercenter.tiki.vn' target='_blank' rel='noreferrer'>sellercenter.tiki.vn</a>
            {' '}
            - Web Platform supporting for TIKI sellers
          </div>
          <div>
            * Tech: ReactJS + Redux-Saga + Ant Design + Webpack + NodeJS + Jest
          </div>
        </div>
        <div className='bg-gray-100 p-1 text-tiny border border-gray-400 rounded mt-2'>
          <div>
            * Team size: 3
          </div>
          <div>
            * Develop 
            {' '}
            <a className='underline italic' href='https://apps.apple.com/us/app/tiki-seller-b%C3%A1n-h%C3%A0ng-c%C3%B9ng-tiki/id1437739945' target='_blank' rel='noreferrer'>Tiki Seller Center App</a>
            {' '}
          </div>
          <div>
            * Tech: React Native + Redux-Saga + Native Base + Code push (App Center)
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
        <div className='text-tiny'>Fullstack Engineer</div>
        <div className='bg-gray-100 p-1 text-tiny border border-gray-400 rounded'>
          <div>
            * Team size: 6
          </div>
          <div>
            * Develop 
            {' '}
            <a className='underline italic' href='https://socialheat.younetmedia.com' target='_blank' rel='noreferrer'>socialheat.younetmedia.com</a>
            {' '}
            - Social listening web platform which monitoring real-time all online platfoms. Sentiment rating and identify influencers
          </div>
          <div>
            * Facebook KOLs Crawler
          </div>
          <div>
            * Tech: Angular + NodeJS
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
        <div className='text-tiny'>Fresher</div>
        <div className='bg-gray-100 p-1 text-tiny border border-gray-400 rounded'>
          <div>
            * Team size: 5
          </div>
          <div>
            * Develop internal CMS Admin website for network department
          </div>
          <div>
            * Tech: PHP with Phalcon Framework + JS
          </div>
        </div>
      </div>
    </div>
  </>
  );

export default Working;
