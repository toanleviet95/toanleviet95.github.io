import React from 'react';
import nodejs from 'assets/skills/nodejs.png';
import reactImage from 'assets/skills/react.png';
import angular from 'assets/skills/angular.png';
import php from 'assets/skills/php.png';
import css from 'assets/skills/css.png';
import firebase from 'assets/skills/firebase.png';


// eslint-disable-next-line react/prop-types
const Skills = () => (
  <>
    <h2>-- Skills --</h2>
    <div className='grid grid-cols-3 gap-4'>
      <div className='col-span-1'>
        <img src={nodejs} alt='Nodejs' title='Nodejs' />
      </div>
      <div className='col-span-1'>
        <img src={reactImage} alt='React' title='React' />
      </div>
      <div className='col-span-1'>
        <img src={angular} alt='Angular' title='Angular' />
      </div>
      <div className='col-span-1'>
        <img src={css} alt='VSS' title='CSS' />
      </div>
      <div className='col-span-1'>
        <img src={php} alt='PHP' title='PHP' />
      </div>
      <div className='col-span-1'>
        <img src={firebase} alt='firebase' title='firebase' />
      </div>
    </div>
  </>
  );

export default Skills;
