import React from 'react';
import tiki from 'assets/tiki.png';
import gobear from 'assets/gobear.jpg';
import younet from 'assets/younet.png';

// eslint-disable-next-line react/prop-types
const Working = () => (
  <>
    <h2>-- Work Experience --</h2>
    <div className='flex items-center'>
      <div className='w-1/6 p-2 text-center'>
        <a href='https://www.gobear.com' target='_blank' rel='noreferrer'>
          <img src={gobear} alt='gobear' />
        </a>
      </div>
      <div className='w-5/6 p-2'>
        <div>
          <a href='https://www.gobear.com' target='_blank' rel='noreferrer'>GOBEAR</a>
          &nbsp;-&nbsp;(07/2020 - 09/2020)
        </div>
        <div className='text-tiny'>
          Front-end Engineer -
          {' '}
          <b>TERMINATE CONTRACT BECAUSE OF COVID DIFFICULTIES</b>
        </div>
        <div className='bg-gray-100 p-1 text-tiny border border-gray-400 rounded'>
          <div>
            * Team size: 3
          </div>
          <div>
            * Build Components based on
            {' '}
            <a className='underline italic' href='https://pantry.gobear.com' target='_blank' rel='noreferrer'> Pantry Design System</a>
            {' '}
            for Reusability and Scalability of Front-end Team
          </div>
          <div>
            * Tech: Vue.js + Storybook
          </div>
        </div>
      </div>
    </div>
    <div className='flex items-center'>
      <div className='w-1/6 p-2 text-center'>
        <a href='https://tiki.vn' target='_blank' rel='noreferrer'>
          <img src={tiki} alt='TIKI CORPORATION' />
        </a>
      </div>
      <div className='w-5/6 p-2'>
        <div>
          <a href='https://tiki.vn' target='_blank' rel='noreferrer'>TIKI CORPORATION</a>
          &nbsp;-&nbsp;(05/2018 - 06/2020)
        </div>
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
        <a href='https://younetgroup.com' target='_blank' rel='noreferrer'>
          <img src={younet} alt='YOUNET' />
        </a>
      </div>
      <div className='w-5/6 p-2'>
        <div>
          <a href='https://younetgroup.com' target='_blank' rel='noreferrer'>YOUNET</a>
          &nbsp;-&nbsp;(04/2017 - 05/2018)
        </div>
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
  </>
  );

export default Working;
