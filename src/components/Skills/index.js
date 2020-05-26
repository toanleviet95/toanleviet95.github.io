import React from 'react';
import nodejs from 'assets/skills/node.png';
import reactImage from 'assets/skills/react.png';
import php from 'assets/skills/php.png';
import css from 'assets/skills/css.png';
import firebase from 'assets/skills/firebase.png';
import mysql from 'assets/skills/mysql.png';
import jest from 'assets/skills/jest.png';
import webpack from 'assets/skills/webpack.png';
import travis from 'assets/skills/travis.png';
import { StyledBreak } from './styled';

// eslint-disable-next-line react/prop-types
const Skills = () => (
  <>
    <h2>-- Skills --</h2>
    <div className='grid grid-cols-3 gap-4'>
      <div className='flex flex-wrap items-center justify-center'>
        <div className='mb-4'>
          <img src={reactImage} alt='React' title='React' />
        </div>
        <StyledBreak />
        <div className='text-tiny text-center'>
          React, Angular
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-center'>
        <div className='mb-4'>
          <img src={css} alt='Angular' title='Angular' />
        </div>
        <StyledBreak />
        <div className='text-tiny text-center'>
          CSS3, SCSS, PostCSS
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-center'>
        <div className='mb-4'>
          <img src={nodejs} alt='Nodejs' title='Nodejs' />
        </div>
        <StyledBreak />
        <div className='text-tiny text-center'>
          ExpressJS, FeathersJS, Loopback
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-center'>
        <div className='mb-4'>
          <img src={php} alt='VSS' title='CSS' />
        </div>
        <StyledBreak />
        <div className='text-tiny text-center'>
          Laravel, Phalcon
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-center'>
        <div className='mb-4'>
          <img src={mysql} alt='PHP' title='PHP' />
        </div>
        <StyledBreak />
        <div className='text-tiny text-center'>
          MySQL, MongoDB
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-center'>
        <div className='mb-4'>
          <img src={firebase} alt='firebase' title='firebase' />
        </div>
        <StyledBreak />
        <div className='text-tiny text-center'>
          Firebase, Heroku, AWS
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-center'>
        <div className='mb-4'>
          <img src={jest} alt='VSS' title='CSS' />
        </div>
        <StyledBreak />
        <div className='text-tiny text-center'>
          Unit test with Jest
          <br />
          Headless test with Puppeteer
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-center'>
        <div className='mb-4'>
          <img src={webpack} alt='PHP' title='PHP' />
        </div>
        <StyledBreak />
        <div className='text-tiny text-center'>
          Bundle with Webpack, Parcel, Gulph
        </div>
      </div>
      <div className='flex flex-wrap items-center justify-center'>
        <img src={travis} alt='firebase' title='firebase' />
        <StyledBreak />
        <div className='text-tiny text-center'>
          CI/CD with Travis, Jenkins
        </div>
      </div>
    </div>
  </>
  );

export default Skills;
