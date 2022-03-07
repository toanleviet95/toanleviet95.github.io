import React from 'react';
import tiki from 'assets/tiki.png';
import chotot from 'assets/chotot.png';
import younet from 'assets/younet.png';

// eslint-disable-next-line react/prop-types
const Working = () => (
  <>
    <h2>-- Work Experience --</h2>
    <div className='flex items-center'>
      <div className='w-1/6 p-2 text-center'>
        <a href='https://www.chotot.com/' target='_blank' rel='noreferrer'>
          <img src={chotot} alt='chotot' />
        </a>
      </div>
      <div className='w-5/6 p-2'>
        <div>
          <a href='https://www.chotot.com/' target='_blank' rel='noreferrer'>CHOTOT</a>
          &nbsp;-&nbsp;(11/2020 - Now)
        </div>
        <div className='text-tiny'>
          Senior Front-end Engineer
        </div>
        <div className='bg-gray-100 p-1 text-tiny border border-gray-400 rounded'>
          <div>
            * Team size: 19
          </div>
          <div>
            * Develop
            {' '}
            <a className='underline italic' href='https://www.chotot.com/' target='_blank' rel='noreferrer'>chotot.com</a>
            {' '}
            - Recommerce platform in Vietnam
          </div>
          <div>
            * Tech: React.js + Redux + Next.js + Jest
          </div>
        </div>
        <div className='bg-gray-100 p-1 text-tiny border border-gray-400 rounded mt-2'>
          <div>
            * Team size: 4
          </div>
          <div>
            * Develop
            {' '}
            CladUI
            {' '}
            - Chotot Design System Components
          </div>
          <div>
            * Tech: React.js + Storybook + Jest
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
