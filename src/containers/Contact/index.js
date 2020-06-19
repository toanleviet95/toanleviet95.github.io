import React from 'react';
import Icon from 'components/Icon';
import github from 'assets/social/github.svg';
import linkedin from 'assets/social/linkedin.svg';
import skype from 'assets/social/skype.svg';
import phone from 'assets/icons/phone.svg';
import envelope from 'assets/icons/envelope.svg';

// eslint-disable-next-line react/prop-types
const Contact = () => (
  <>
    <h2>-- Contact --</h2>
    <div className='text-center text-tiny'>
      <Icon src={phone} name='phone' width='0.7em' />
      <span>(+84) 938239554</span>
    </div>
    <div className='text-center text-tiny'>
      <Icon src={envelope} name='envelope' width='0.7em' />
      <span>toanleviet95@gmail.com</span>
    </div>
    <div className='flex items-center justify-around bg-gray-100 border border-gray-400 rounded'>
      <div className='m-2'>
        <a
          href='https://github.com/toanleviet95'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img style={{ width: 56 }} src={github} alt='github' title='github' />
        </a>
      </div>
      <div className='m-2'>
        <a
          href='https://www.linkedin.com/in/toanleviet95'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img style={{ width: 56 }} src={linkedin} alt='linkedin' title='linkedin' />
        </a>
      </div>
      <div className='m-2'>
        <a
          href='https://join.skype.com/invite/eO6ub8WoLQmD'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img style={{ width: 56 }} src={skype} alt='skype' title='skype' />
        </a>
      </div>
    </div>
  </>
  );

export default Contact;
