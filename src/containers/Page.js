import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import PrintButton from 'components/PrintButton';
import theme from 'constants/constants.styled';
import StyledGlobal from './Page.styled';

const Page = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    copyStyles: true,
  });
  
  return (
    <>
      <PrintButton onPrint={handlePrint} />
      <div ref={componentRef}>
        <StyledGlobal theme={theme} />
        <section className='about'>
          <section className='wrapper about-me'>
            <h2>-- Le Viet Toan --</h2>
            <p>
              Hi, I am TOAN! A boy who going step by step to win myself
            </p>

            <ul className='social-me'>
              <li>
                <a
                  href='https://github.com/toanleviet95'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {/* <img src={github} alt='github' /> */}
                </a>
              </li>
              <li>
                <a
                  href='https://www.facebook.com/toanleviet95'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {/* <img src={facebook} alt='facebook' /> */}
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/toanleviet95'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {/* <img src={linkedin} alt='linkedin' /> */}
                </a>
              </li>
            </ul>
          </section>
        </section>
      </div>
    </>
);
};

export default Page;
