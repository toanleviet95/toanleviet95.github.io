import React from 'react';

// eslint-disable-next-line react/prop-types
const PetProjects = () => (
  <>
    <h2>-- Side Projects --</h2>
    <div className='flex justify-around'>
      <div className='py-2 m-2'>
        <div>
          <a href='https://buzzmetricsquo.web.app' target='_blank' rel='noreferrer'>
            Buzzmetricsquo
          </a>
        </div>
        <div className='bg-gray-100 p-2 text-tiny border border-gray-400 rounded'>
          <div>
            * Team size: 2
          </div>
          <div>
            * Develop
            {' '}
            <a className='underline italic' href='https://buzzmetricsquo.web.app' target='_blank' rel='noreferrer'>buzzmetricsquo.web.app</a>
            {' '}
            - Web Admin for managing brand, campaign, crisis metrics
          </div>
          <div>
            * Tech: ReactJS + Redux-Saga + Webpack + Firebase
          </div>
        </div>
      </div>
      <div className='py-2 m-2'>
        <div>
          <a href='https://jobs.cvreferral.com' target='_blank' rel='noreferrer'>
            cvreferral.com
          </a>
        </div>
        <div className='bg-gray-100 p-2 text-tiny border border-gray-400 rounded'>
          <div>
            * Team size: 5
          </div>
          <div>
            * Develop
            {' '}
            <a className='underline italic' href='https://jobs.cvreferral.com' target='_blank' rel='noreferrer'>cvreferral.com</a>
            {' '}
            - Recruitment solutions by referrals
          </div>
          <div>
            * Tech: NextJS + Redux-Saga
          </div>
        </div>
      </div>
      <div className='py-2 m-2'>
        <div>
          <a href='https://tssrm.com/' target='_blank' rel='noreferrer'>
            tssrm.com
          </a>
        </div>
        <div className='bg-gray-100 p-2 text-tiny border border-gray-400 rounded'>
          <div>
            * Team size: 5
          </div>
          <div>
            * Develop
            {' '}
            <a className='underline italic' href='https://tssrm.com/' target='_blank' rel='noreferrer'>tssrm.com</a>
            {' '}
            - Internal Review platform for Designers
          </div>
          <div>
            * Tech: Vue.js + Vuex + ElementUI
          </div>
        </div>
      </div>
    </div>
  </>
  );

export default PetProjects;
