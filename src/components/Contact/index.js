import React from 'react';
import Icon from 'components/Icon';
import github from 'assets/social/github.svg';
import linkedin from 'assets/social/linkedin.svg';
import skype from 'assets/social/skype.svg';
import phone from 'assets/icons/phone.svg';


// eslint-disable-next-line react/prop-types
const Contact = () => (
  <>
    <h2>-- Contact --</h2>
    <div className='text-center'>
      <Icon src={phone} name='phone' width='0.7em' />
      <span>(+84) 938239554</span>
    </div>
    <div className='flex items-center bg-gray-100 border border-gray-400 rounded'>
      <div className='flex-1 text-center m-2'>
        <a
          href='https://github.com/toanleviet95'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={github} alt='github' title='github' />
        </a>
      </div>
      <div className='flex-1 text-center m-2'>
        <a
          href='https://www.linkedin.com/in/toanleviet95'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={linkedin} alt='linkedin' title='linkedin' />
        </a>
      </div>
      <div className='flex-1 text-center m-2'>
        <a
          href='skype:toanleviet9495?chat'
          target='_blank'
          rel='noopener noreferrer'
        >
          <img src={skype} alt='skype' title='skype' />
        </a>
      </div>
    </div>
  </>
  );

export default Contact;
